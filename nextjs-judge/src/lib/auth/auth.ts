import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import {PrismaAdapter} from '@next-auth/prisma-adapter' 
import { Adapter } from "next-auth/adapters";
import prisma from "@/prisma/prisma";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma) as Adapter,
    session: {
      strategy: 'jwt',
    },
    secret : process.env.NEXTAUTH_SECRET!,
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    ],
    pages: {
      signIn: "/login",
      newUser : "/setup"
    },
    debug:true,
    events:{
      createUser(){
          console.log("hi");
          
      }
    },
    callbacks: {     
      async jwt({ token,user }) {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: token.email!,
          },
        });
        
        if (user) {
          token.username = dbUser?.userName as string;
        }
        return token;

       
      },
      async session({session,token}){
        if (token && session.user) {
          session.user.username = token.username;
        }
        return session;
      }
    }
    };
  
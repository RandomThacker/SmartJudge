import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(req:NextRequest,res:NextResponse) {
    try {

        const request = await req.json();
        
        const {username} = request;
        console.log(username);
        

        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' });
        }

        console.log(username);
        

        const user = await prisma.user.update({
            where: {
                email: token.email!,
            },
            data:{
                userName:username
            }
        });

        console.log(user);


        if(!user){
            return NextResponse.json({
                success:false,
                message : "Try some other username"
            });
        }
        
        return NextResponse.json({
            success: true,
            message : "Username has been updated successfully"
        })

    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}

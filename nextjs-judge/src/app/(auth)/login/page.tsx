"use client";
import React from 'react'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react'

export default function Page() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Get solving with us by signing up using google and github
            </p>
          </div>
          <div className="grid gap-4">
            
            <Button type="submit" onClick={()=>signIn('github')} className="w-full">
              Login with Github
            </Button>
            <Button variant="outline" onClick={()=>signIn('google')} className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

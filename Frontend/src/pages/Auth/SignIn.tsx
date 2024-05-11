import { Card } from '@/components/ui/card'
import React from 'react'
import { LucideDoorOpen } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FaGoogle } from 'react-icons/fa'

export default function SignIn() {
    return (
        <div className='w-full h-screen flex items-center justify-center '>
            <Card className='max-w-sm p-4'>
                <div className='rounded-[1000px] p-4 w-fit h-fit bg-gray-400'>
                    <LucideDoorOpen color="#ffffff" strokeWidth={1.25} />
                </div>

                <div className='my-4'>
                    <h1 className='font-bold text-xl'>Welcome to SmartJudge</h1>
                    <p className='font-light text-sm'>Please Sign In or Sign Up below to continue</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="password" />
                    </div>
                </div>

                <Button className='w-full my-2'>
                    Continue with Email
                </Button>

                <Separator />

                <Button className='w-full flex items-center gap-3 my-2'>
                    <FaGoogle />
                    Continue with Google
                </Button>
            </Card>
        </div>
    )
}

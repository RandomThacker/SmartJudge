import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  return (
    <nav className='py-2 px-4 flex justify-between items-center border-b-2'>
      <div>
        Smart<span className='font-bold'>Judge</span>
      </div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

      </div>

    </nav>
  )
}

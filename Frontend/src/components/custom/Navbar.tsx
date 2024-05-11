import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
  const navi = useNavigate();

  return (
    <nav className='py-2 px-4 flex justify-between items-center border-b-2'>
      <div onClick={()=>{
        navi('/')
      }}>
        Smart<span className='font-bold'>Judge</span>
      </div>

      <div>
        <Button variant="link">
          <Link to='/problems'>Problems</Link>
        </Button>
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

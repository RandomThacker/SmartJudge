import React from 'react'
import { Button } from '@/components/ui/button'
import {Plus} from 'lucide-react';
export default function EventHost() {
  return (
    <>
    
    <hr className='bg-black my-5' />

    <div className='flex gap-2 items-center py-4'>
        <img 
        className='rounded-[1000px] h-[50px] w-[50px]'
        src={"https://images.pexels.com/photos/19080203/pexels-photo-19080203/free-photo-of-the-fernsehturm-tower-at-night-with-trees-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="" />
        <span className='font-semibold text-xl'>CIT</span>
    </div>
    
    <Button className="flex gap-2 p-4 rounded-[1000px] w-[70%]">
    <Plus />
        Add Host 
    </Button>
    </>
  )
}

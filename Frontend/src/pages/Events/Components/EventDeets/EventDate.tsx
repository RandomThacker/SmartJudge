import React from 'react'
import { Separator } from '@/components/ui/separator'

function EventBox() {
  return (
    <div className='rounded-lg flex flex-col items-center '>
        <div className='px-1 bg-gray-300 text-white rounded-t-lg'>
            MAR
        </div>
        <Separator/>
        <div className='font-semibold '>
            23
        </div>
    </div>
  )
}


export default function EventDate() {
  return (
    <div className='flex gap-3 my-3 ml-2'>
        <EventBox />

        <div className='flex flex-col'>
            <span className='font-bold'>Saturday , March 23</span>
            <span className='text-gray-400'>8:00 AM - 5:00 PM</span>
        </div>
    </div>
  )
}

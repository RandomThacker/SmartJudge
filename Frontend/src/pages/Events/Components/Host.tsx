import React from 'react'

export default function Host({HostName}:{HostName:string}) {
  return (
    <div className='flex gap-1 items-center py-4'>
        <img src="https://images.pexels.com/photos/20523844/pexels-photo-20523844/free-photo-of-a-vintage-telephone-on-a-table-with-a-clock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Host image" className='rounded-[1000%] h-[40px] w-[40px]' />
        {HostName}
    </div>
  )
}

import React from 'react'

export default function EventImage({imgsrc}:{imgsrc:string}) {
  return (
    <img
    src={imgsrc}
    alt="Event Image"
     className='rounded-lg max-w-[40vw]'

     />
  )
}

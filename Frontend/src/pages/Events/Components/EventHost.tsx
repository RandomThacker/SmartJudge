import React from 'react'
import { Separator } from "@/components/ui/separator"
import Host from './Host'

export default function EventHost() {
  return (
    <div className='my-4' >
        <span>Hosted By</span>
        <Separator />
        <Host HostName='CIT' />
    </div>
  )
}

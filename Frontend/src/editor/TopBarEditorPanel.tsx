import React, { useState } from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { Toggle } from "@/components/ui/toggle"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Timer from '@/components/custom/Timer';

  
export default function TopBarEditorPanel() {
  
  const [onTimer,setOnTimer] = useState(false);
  
  return (
    <div className='flex justify-between items-center p-3'>
        <div>
            Code
        </div>

        <div className='flex gap-3'>
        {onTimer?<Timer/>:""}
        
        <Toggle onPressedChange={(timer)=>{
          setOnTimer(!timer);
        }}>
        <MdOutlineTimer />
        </Toggle>

        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="JavaScript" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="js">Javascript</SelectItem>
  </SelectContent>
</Select>


        </div>
    </div>
  )
}

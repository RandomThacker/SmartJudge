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
import { useRecoilState } from 'recoil';
import { codeState } from '@/../atom/CodeAtom';

  
export default function TopBarEditorPanel() {
  const [selectLang,setSelectLang] = useRecoilState(codeState);
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

        <Select onValueChange={(data)=>{
          setSelectLang({
          ...selectLang,
          lang : data
        })
        console.log(data);
        console.log(selectLang);
        

        }}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="py">Python</SelectItem>
    <SelectItem value="js">JavaScript</SelectItem>
  
  </SelectContent>
</Select>


        </div>
    </div>
  )
}

import React from 'react'
import QPanel from './Components/QPanel';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import EditorPanel from '@/editor/EditorPanel';


import { question1 } from "/home/shivamjain/Code/SmartJudge/Questions/1/Question"

export default function Question() {
  return (
    <section className='max-h-[90vh]'>
      <ResizablePanelGroup direction="horizontal">
  <ResizablePanel>
      <QPanel questionNumber={1} questionDesc={question1} questionTitle='Two Sum' questionTags={["array"]} />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
  <EditorPanel />
    
  </ResizablePanel>
</ResizablePanelGroup>
    </section>
  )
}

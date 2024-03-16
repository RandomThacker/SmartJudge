import React from 'react'
import QPanel from './Components/QPanel';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import EditorPanel from '@/editor/EditorPanel';



export default function Question() {
  return (
    <section className='h-screen'>
      <ResizablePanelGroup direction="horizontal">
  <ResizablePanel>
    <QPanel questionNumber={1} questionDesc='# Hi, *Pluto*!' questionTitle='Two Sum' questionTags={["array"]} />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
  <EditorPanel />
    
  </ResizablePanel>
</ResizablePanelGroup>
    </section>
  )
}

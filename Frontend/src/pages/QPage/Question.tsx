import React from 'react'
import QPanel from './Components/QPanel';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import EditorPanel from '@/editor/EditorPanel';


import {Question1} from '../../../../Questions/Add/Question'

export default function Question() {
  return (
    <section className='max-h-[90vh]'>
      <ResizablePanelGroup direction="horizontal">
  <ResizablePanel>
      <QPanel questionNumber={1} questionDesc={Question1} questionTitle='BFS traversal of graph' questionTags={["graph"]} />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
  <EditorPanel />
    
  </ResizablePanel>
</ResizablePanelGroup>
    </section>
  )
}

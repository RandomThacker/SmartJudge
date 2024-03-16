import React from 'react'
import Editor from './Editor'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import TopBarEditorPanel from './TopBarEditorPanel'
export default function EditorPanel() {
  return (
    <div className='flex flex-col'>
        {/* Top Bar */}
        <TopBarEditorPanel />


        <Editor />
        
        {/* Buttons */}
        <div className=' p-3 flex flex-end gap-4 '>
            <Button>
                Run
            </Button>

            <Button>
                Submit
            </Button>
        </div>
    </div>
  )
}

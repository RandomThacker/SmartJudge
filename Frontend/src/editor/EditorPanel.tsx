import React from 'react'
import Editor from './Editor'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import TopBarEditorPanel from './TopBarEditorPanel'

import {
  useRecoilValue
} from 'recoil';

import {codeState } from '@/../atom/CodeAtom';

export default function EditorPanel() {
  const codeVal = useRecoilValue(codeState);

  const runCode = ()=>{
    console.log(codeVal);
    
  }

  return (
<div className='flex flex-col'>
        {/* Top Bar */}
        <TopBarEditorPanel />


        <Editor />
        
        {/* Buttons */}
        <div className=' p-3 flex flex-end gap-4 '>
            <Button onClick={runCode}>
                Run
            </Button>

            <Button>
                Submit
            </Button>
        </div>
    </div>
  )
}

import React, { useState } from 'react';
import Editor from './Editor';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TopBarEditorPanel from './TopBarEditorPanel';
import { Gavel, Loader2, Play } from "lucide-react";

import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { codeState } from '@/../atom/CodeAtom';

export default function EditorPanel() {
  const codeVal = useRecoilValue(codeState);
  const [isRun, setIsRun] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const runCode = async () => {
    setIsRun(true);
    console.log(codeVal);
    const response = await axios.post('http://localhost:8000/run', {
      code: codeVal.code,
      lang: codeVal.lang
    });

    console.log(response);
    setIsRun(false);
  };

  const submitCode = async () => {
    setIsSubmit(true);
    console.log(codeVal);
    const response = await axios.post('http://localhost:8000/run', {
      code: codeVal.code,
      lang: codeVal.lang
    });

    console.log(response);
    setIsSubmit(false);
  };

  return (
      <Card className="p-4">
        {/* Top Bar */}
        <TopBarEditorPanel />

        <Editor />

        {/* Buttons */}
        <div className="flex justify-end mt-4">
          <Button disabled={isRun} onClick={runCode} className="mr-2">
            {isRun ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
            Run
          </Button>

          <Button disabled={isSubmit} onClick={submitCode}>
            {isSubmit ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Gavel className="mr-2 h-4 w-4" />}
            Submit
          </Button>
        </div>
      </Card>
  );
}

import React, { useState,useEffect } from 'react';
import Editor from './Editor';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TopBarEditorPanel from './TopBarEditorPanel';
import { Gavel, Loader2, Play } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { codeState } from '@/../atom/CodeAtom';
import { useNavigate } from 'react-router-dom'

export default function EditorPanel() {
  const navi = useNavigate();

  const codeVal = useRecoilValue(codeState);
  const [isRun, setIsRun] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect,setIsCorrect] = useState(false);
  const {toast} = useToast();

  const runCode = async () => {
    setIsRun(true);
    console.log(codeVal);
    const response = await axios.post('http://localhost:8000/run', {
      code: codeVal.code,
      lang: codeVal.lang
    });

    console.log("Running code");
    setTries(tries+1);
    console.log(response);
    toast({
      title : "Correct",
      description : "You are correct",
    })
    setIsRun(false);
  };

  const submitCode = async () => {
    setIsSubmit(true);
    console.log(codeVal);
    const response = await axios.post('http://localhost:8000/run', {
      code: codeVal.code,
      lang: codeVal.lang
    });
    setTries(tries+1);
    console.log(response);
    setIsSubmit(false);

    setIsCorrect(true);
  };

  const [tries,setTries] = useState(0);
  useEffect(()=>{
    if(tries>2){
      toast({
        title : "Woah think again",
        description : "Third time maybe the charm",
      })
    }

    if(isCorrect){
      toast({
        title : "Correct",
        description : "You are correct",
      })

      navi(`/recommendations`);
    }
  },[tries,isCorrect])


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

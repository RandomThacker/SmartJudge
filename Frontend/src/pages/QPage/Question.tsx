import React, { useEffect, useState } from 'react'
import QPanel from './Components/QPanel';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import EditorPanel from '@/editor/EditorPanel';
import { useParams } from 'react-router-dom';
import S3 from 'aws-sdk/clients/s3';
import AWS from 'aws-sdk'
import axios from 'axios';
import TestCasePanel from './Components/TestCasePanel';
// import {Question1} from '../../../../Questions/Add/Question'

export default function Question() {
  const params = useParams()
  const question = params.question;

  // const [defaultCode,setDefaultCode] = useState(null);

  // const s3Bucket = import.meta.env.VITE_S3BUCKETNAME
  // const region = import.meta.env.VITE_REGION

  // AWS.config.update({
  //   accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
  //   secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY
  // })

  // const s3 = new S3({
  //   params:{Bucket : s3Bucket},
  //   region: region
  // })

  // const DEFAULT_FILE_KEY = import.meta.env.VITE_DEFAULT_FILE_KEY;

  // const s3params = {
  //   Bucket : s3Bucket,
  //   Key : DEFAULT_FILE_KEY
  // }

  // try {
  //   setDefaultCode()
  // } catch (error) {
    
  // }


  const [questionMD,setQuestionMD] = useState("");

  const questionsBucket = import.meta.env.VITE_QUESTIONS_BUCKET;

  async function fetchMD(){    
    const response = await axios.get(`https://${questionsBucket}.s3.ap-south-1.amazonaws.com/${question}/${question}.md`);    
    setQuestionMD(response.data);
  }

  useEffect(()=>{
    fetchMD()
    console.log(questionMD);
    
  },[])

  return (
    <section className='max-h-[90vh]'>
      <ResizablePanelGroup direction="horizontal">
  <ResizablePanel>
      <QPanel questionNumber={1} questionDesc={questionMD} questionTitle={question as string} questionTags={["graph"]} />
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel>
  <EditorPanel />
    <TestCasePanel />
  </ResizablePanel>
</ResizablePanelGroup>
    </section>
  )
}

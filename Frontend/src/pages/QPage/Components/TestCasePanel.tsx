import React from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestTubeDiagonal,Activity } from 'lucide-react'

export default function TestCasePanel() {
  return (
    <Card className='p-4 mt-2'>
        <Tabs defaultValue="test cases" className="w-[400px]">
  <TabsList className='p-2'>
    <TabsTrigger value="testcases" className='flex gap-2'> <TestTubeDiagonal className='size-4' strokeWidth={1} /> Test Cases</TabsTrigger>
    <TabsTrigger value="testresult" className='flex gap-2' disabled><Activity size={20} strokeWidth={0.75} /> Test Result</TabsTrigger>
  </TabsList>
  <TabsContent value="testcases">
    
    <div>
        <span className='text-sm text-gray-600'>nums = </span>
        <Card className='p-2'>
            [2,7,11,15]
        </Card>
    </div>

    <div>
    <span className='text-sm text-gray-600'>target = </span>
        <Card className='p-2'>
            9
        </Card>
    </div>
    
  </TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </Card>
  )
}

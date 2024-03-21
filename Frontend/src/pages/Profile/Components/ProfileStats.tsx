import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface ProfileStatsProps{
    easy : number,
    medm : number,
    hard : number
}


export default function ProfileStats({easy,medm,hard}:ProfileStatsProps) {
  return (
    <Card className='rounded-sm p-4 w-fit m-2'>
        <div> 
            
            <span>Easy <span className='font-semibold text-[0.8rem] text-gray-600'>{easy}/460</span></span>
            <Progress className='my-2' indicatorColor='bg-green-400' value={easy} />

            <span>Medium <span className='font-semibold text-[0.8rem] text-gray-600'>{medm}/760</span></span>
            <Progress className='my-2' value={medm} indicatorColor='bg-yellow-400' />

            <span>Hard <span className='font-semibold text-[0.8rem] text-gray-600'>{hard}/260</span></span>
            <Progress className='my-2' value={hard} indicatorColor='bg-red-400' />

        </div>
    </Card>
  )
}

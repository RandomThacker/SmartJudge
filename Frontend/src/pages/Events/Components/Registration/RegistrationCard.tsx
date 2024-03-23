import { Card } from '@/components/ui/card'
import EventHost from '../EventHost'
import { Button } from '@/components/ui/button'
import Host from '../Host'
export default function RegistrationCard() {
  return (
    <Card className='p-2'>
        <div className='bg-gray-200 rounded-md my-2 p-2'>
            Registration
        </div>
        <div className='p-2 items-center'>
            <span>Welcome! To join the event, please register below.</span>
            <Host HostName='Shivam Jain' />

            <Button className="rounded-md w-full">
                Register
            </Button>
        </div>
    </Card>
  )
}

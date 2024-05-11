import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Host from '../Host'
import { useToast } from "@/components/ui/use-toast"
import { useState } from 'react'
export default function RegistrationCard() {
  const { toast } = useToast()
  const [registered,isRegistered] = useState(false);
  const handleRegistration = () => {
    isRegistered(true);

    if(registered){
      return toast({
        title: "Already Registered !",
        description: "You have already registered for the event.",
      })
    }

    toast({
      title: "Scheduled ! 🎉",
      description: "You have successfully registered for the event.",
    })  
  }
  return (
    <Card className='p-2'>
        <div className='bg-gray-200 rounded-md my-2 p-2'>
            Registration
        </div>
        <div className='p-2 items-center'>
            <span>Welcome! To join the event, please register below.</span>
            <Host HostName='Shivam Jain' />

            <Button className="rounded-md w-full"
            onClick={handleRegistration}
            >
                {registered?"Registered":"Register Now"}
            </Button>
        </div>
    </Card>
  )
}

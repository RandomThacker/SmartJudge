import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function UserProfile() {
    return (
        <Card className='p-4 m-2 flex gap-2 w-fit items-center'>

        <div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        
        <div className='flex flex-col'>
            <span className='font-bold text-lg'>Shivam Jain</span>
            <span className='text-md'>shivam.jainn</span>
        </div>
        
        </Card>
    )
}

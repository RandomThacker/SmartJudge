import React from 'react'
import { Card } from '@/components/ui/card'

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TimeField } from '@/components/ui/time-field'
import { GlobeIcon } from '@radix-ui/react-icons'
import {Ticket,User,Pencil} from 'lucide-react';

export default function EventDataForm() {
    const [date, setDate] = React.useState<Date>()
    return (
        <div className='flex flex-col '>
            <textarea spellCheck="false" autoCapitalize='true' className='my-1 max-h-[50px]  bg-transparent resize-none border-0 outline-none font-bold text-3xl' placeholder='Event Name' />

            <Card className='p-4 my-1'>
                <div className='flex items-center p-2'>
                    <div className='mx-4'>Date</div>
                    <div>



                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>

                    </div>
                </div>

                <div className='flex items-center p-2'>
                    <div className='mx-4'>Time</div>
                    <div>
                            <TimeField />

                    </div>
                </div>
                <hr />

                <div className='flex items-center gap-1'>
                <GlobeIcon />
                <span className='font-semibold'>GMT+5:30</span>
                 <span className='font-light'>Calcutta</span>

                </div>
            </Card>

            <Card className='p-4 my-2 flex gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
            <textarea className='bg-transparent resize-none border-0 outline-none w-full' placeholder='Add Description' ></textarea>
            </Card>

            <div>
                <h3 className='font-bold'>Event Options</h3>
                
                <Card className='py-2'>

                    <div className='flex justify-between p-2 border-b-2 border-gray-300'>
                                <div className='flex items-center'>
                <Ticket className='p-1' />
                <span>Tickets</span>
                                </div>

                                <div className='flex items-center'>
                                    <span>Free</span>
                        <Pencil className='p-1' />
                                        
                                </div>
                    </div>

                    <div className='flex justify-between p-2'>
                    
                    <div className='flex'>
                    <User className='p-1' />
                    <span>Capacity</span>
                    </div>

                    <div className='flex items-center'>
                        <span>Unlimited</span>
                        <Pencil className='p-1' />
                    </div>
                    </div>
                </Card>
            </div>

            <Button className='my-2'>
                    Create Event
            </Button>
        </div>
    )
}

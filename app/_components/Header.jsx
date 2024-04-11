import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
    //     <div className="relative h-20 w-60">
    //     <Image src="/toppicks.png" alt="logo" fill />
    //  </div> first try on logo sizing. alternative:
     <div className='flex justify-between items-center p-6 md:px-20'>
        <Image src='/toppicks.png' alt='logo'
        width={125}
        height={200} />

            <div className='flex border p-2 rounded-lg bg-gray-200 w-96'>
                <input type='text' className='bg-transparent w-full outline-none' />
                <Search />
            </div>

            <div className='flex gap-5'>
               <Button variant="outline">Login</Button> 
               <Button>Sign Up</Button> 
            </div>
     </div>
    )
}

export default Header
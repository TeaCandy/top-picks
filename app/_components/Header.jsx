"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {

    const {user, isSignedIn}=useUser();

    return (
    //     <div className="relative h-20 w-60">
    //     <Image src="/toppicks.png" alt="logo" fill />
    //  </div> first try on logo sizing. alternative:
     <div className='flex justify-between items-center p-6 md:px-20 shadow-md fixed w-full top-0 left-0 z-20'>
        <Image src='/toppicks.png' alt='logo'
        width={125}
        height={200} />

            <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96'>
                <input type='text' className='bg-transparent w-full outline-none' />
                <Search />
            </div>

          {isSignedIn?
            <UserButton/>
          :<div className='flex gap-5'>
              
                <SignInButton mode='modal'> 
                    <Button variant="outline">Login</Button> 
                </SignInButton>
                <SignUpButton mode='modal'>
                    <Button>Sign Up</Button> 
                </SignUpButton>
            </div>}
     </div>
    )
}

export default Header
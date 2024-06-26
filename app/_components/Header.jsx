"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartUpdateContext } from '../_context/CartUpdateContext'
import GlobalApi from '../_utils/GlobalApi'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Cart from './Cart'
import Link from 'next/link'
  

function Header() {

    const {user, isSignedIn}=useUser();
    const {updateCart,setUpdateCart}=useContext(CartUpdateContext);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        console.log("Execute Me!")
        user&&GetUserCart()
    },[updateCart&&user])

    const GetUserCart=()=>{
        GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(resp=>{
            console.log(resp)
            setCart(resp?.userCarts);
        })
    }

    return (
    //     <div className="relative h-20 w-60">
    //     <Image src="/toppicks.png" alt="logo" fill />
    //  </div> first try on logo sizing. alternative:
     <div className='flex justify-between items-center p-6 md:px-20 shadow-sm'>
        {/* fixed w-full top-0 left-0 z-20 add later*/}
        <Link href={'/?category=all'}><Image src='/toppicks.png' alt='logo'
        width={200}
        height={200}
        />
        </Link>

        <div className=" flex text-bold text-gray-500 mt-10">
Disclaimer: This website is fictitious and intended solely for educational purposes.
    </div>

            {/* <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96'>
                <input type='text' className='bg-transparent w-full outline-none' />
                <Search />
            </div> */}

          {isSignedIn?
           <div className='flex-gap-3 items-center'>
        
            <Popover>
            <PopoverTrigger asChild>
            <div className='flex gap-2 items-center cursor-pointer'>
            <ShoppingCart/>
            <label className='p-1 px-3 rounded-full bg-slate-200'>
                {cart?.length}
            </label>
            </div>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <Cart cart={cart} />
            </PopoverContent>
            </Popover>

            <UserButton/>
           </div>  
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
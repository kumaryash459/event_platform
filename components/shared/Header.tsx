
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Navitems from './Navitems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className=' w-full py-3  border-b'>
      <div className='wrapper flex items-center justify-between'>
         {/* header */}
         <Link href={"/"} className='w-36'>
         <Image src='/assets/images/logo.svg' alt='evently logo' height={36} width={126}/>
         </Link>
         <SignedIn>
            <nav className='md:flex hidden w-full max-w-xs justify-between'>
              <Navitems/>
            </nav>
         </SignedIn>
         
         <div className='flex w-32 justify-end gap-3'>  
            <SignedIn>
              <UserButton  afterSignOutUrl='/'/>
              <MobileNav/>
            </SignedIn>
            <SignedOut>
              <Button asChild className='rounded-full bg-blue-500 hover:bg-blue-600' size='lg'>
                <Link href={'sign-in'}>Login</Link>
              </Button>
            </SignedOut>
         </div>
      </div>
    </header>
  )
}

export default Header

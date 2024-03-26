import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

import Image from 'next/image'
import Navitems from './Navitems'
const MobileNav = () => {
    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <Image
                        src='/assets/icons/menu.svg'
                        alt='menu'
                        height={24}
                        width={24}
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                    <Image
                    src='assets/images/logo.svg'
                    alt='logo'
                    height={38}
                    width={128}
                    />
                    <Separator className='border border-gray-50'/>
                    <Navitems/>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav

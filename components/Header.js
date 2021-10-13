import React from 'react'
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline"


function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl'>
            <div className='relative hidden lg:inline-grid w-24  cursor-pointer'>
                <Image 
                src="https://links.papareact.com/ocw"
                objectFit='contain'
                layout='fill'
                />
            </div>
            <div className='relative w-10  lg:hidden flex-shrink-0'>
                <Image 
                src="https://links.papareact.com/jjm"
                objectFit='contain'
                layout='fill'
                />
            </div> 

            <div className='relative mt-1 p-3 rounded-md '>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                  <SearchIcon  className='h-5 w-5 text-gray-500'/>
                </div>
               <input type="text" className='bg-gray-50 block w-full pl-10 sm:text-sn border-gray-300 focus:ring-black focus:border-black rounded-md' placeholder="Search" /> 
            </div>
            </div>

        </div>
    )
}

export default Header

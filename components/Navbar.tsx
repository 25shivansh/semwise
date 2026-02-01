
import Link from 'next/link';
import React from 'react'
import SignInButton from './SignInButton';
import { getAuthSession } from '@/lib/auth';
import { User } from 'lucide-react';
import UserAccountNav from './UserAccountNav';

type Props={};


const Navbar =async (props:Props) => {
    const session=await getAuthSession();
    console.log("SERVER SESSION:",session);
  return (
    <nav className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2'>
        <div className='flex items-center justidy-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl'>
            <Link href='/gallery'>
                <p className='rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white'>
                    SemWise
                </p>
            </Link>
            <div className='flex items-center'>
                <Link href='/gallery'className='mr-3'>Gallery</Link>

            </div>
            {session?.user &&(
                <>
                
                <Link href='/create' className='mr-3'>Create Course</Link>
                <Link href='/settings' className='mr-3'>Settings</Link>
                <SignInButton/>

            
                </>
            )}
            <div className='flex items-center '>
                {session?.user? <p>Welcome {session.user.name} <UserAccountNav user={session.user} /></p>:<SignInButton/>}
            </div>
            
            
        </div>
    </nav>
  )
}

export default Navbar

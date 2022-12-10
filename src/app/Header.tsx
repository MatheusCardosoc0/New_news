import React from 'react'
import { Bars2Icon, Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from '../components/NavLinks'

const Header = () => {
  return (
    <header>
      <div className='grid grid-cols-3 p-16 items-center'>
        <Bars3Icon className='h-8 w-8 cursor-pointer' />

        <Link href="/" prefetch={false}>
          <h1 className='font-serif text-4xl text-center underline decoration-6 decoration-yellow-500'>New
            <span className='underline decoration-6 decoration-yellow-500'> news</span>
          </h1>
        </Link>

        <div className='flex items-center justify-end space-x-2'>

          <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-6 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
            Se inscreva agora
          </button>
        </div>
      </div>

      <NavLinks />
    </header>
  )
}

export default Header
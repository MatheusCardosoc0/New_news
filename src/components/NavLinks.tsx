import React from 'react'
import { Category } from '../constants/Category'
import NavLink from './NavLink'
import {usePathname} from "next/navigation"

const NavLinks = () => {

  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path
  }

  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-16 max-w-6xl mx-auto border-b'>
      {Category.map((category) => (
        <NavLink key={category} category={category} isActive={isActive(category)}/>
      ))}
    </nav>
  )
}

export default NavLinks
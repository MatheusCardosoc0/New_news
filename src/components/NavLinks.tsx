import React from 'react'
import { Category } from '../constants/Category'
import NavLink from './NavLink'

const NavLinks = () => {
  return (
    <nav>
      {Category.map((category) => (
        <NavLink key={category} category={category} isActive={true}/>
      ))}
    </nav>
  )
}

export default NavLinks
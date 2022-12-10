import Link from 'next/link'
import React from 'react'

type NavLinksProps = {
  category: string
  isActive: boolean
}

const NavLink = ({category, isActive} : NavLinksProps) => {

  return (
    <Link href={`/news/${category}`}
    className={`navLink ${isActive && 'underline decoration-yellow-500'}`}>
      {category}
    </Link>
  )
}

export default NavLink
'use client'
import React, { useState } from 'react'
import { close, logo, menu } from '../../../public'
import { navLinks } from '../constants'
import Image from 'next/image'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <header>
    <nav className='w-full fixed top-0 flex justify-between py-6 items-center navbar'>
      <div className='w-1/2 justify-start'>
        <Image src={logo} alt='hoobank' className='w-[124px] h-[32px]'/>
      </div>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1 pr-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>        
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>        
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Navbar
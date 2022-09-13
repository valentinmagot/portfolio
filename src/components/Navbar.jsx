import React, { useState } from 'react'

//import assets
import {close, menu, logo} from '../assets'

//import constants 
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false) 
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-[1]">
      <a href='/portfolio'><img src={logo} alt='Valentin Magot' className='w-[124px] h-[32px] cursor-pointer'/></a>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) =>(
            <li key={nav.id}
             className={`font-nunito font-normal cursor-pointer text-[18px]
             ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-highEmphasis`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev )}
          />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) =>(
              <li key={nav.id}
              className={`font-nunito font-normal cursor-pointer text-[18px]
              ${index == navLinks.length - 1 ? 'mr-0' : 'mb-6'} text-bright`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
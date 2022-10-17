import React, { useState } from 'react'

//import assets
import {close, menu, logo} from '../assets'

//import constants 
import { navLinks } from '../constants'

import { useTranslation } from 'react-i18next';


const lngs = {
  en: { nativeName: 'EN' },
  fr: { nativeName: 'FR' }
};
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false) 
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-[1]">
      <a href='/portfolio'><img src={logo} alt='Valentin Magot' className='w-[124px] h-[32px] cursor-pointer'/></a>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) =>(
            <li key={nav.id}
             className={`font-nunito font-normal cursor-pointer text-[18px]
             mr-10 text-highEmphasis`}>
              <a href={`#${nav.id}`}>
                {t('links.'+nav.id)}
              </a>
            </li>
        ))}
        <li className={`font-nunito font-normal cursor-pointer text-[18px] mx-6 text-highEmphasis`}>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} className='m-2' style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </li>
      </ul>

      

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev )}
          />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) =>(
              <li key={nav.id}
              className={`font-nunito font-normal mb-6 cursor-pointer text-[18px] text-bright`}>
                <a href={`#${nav.id}`}>
                  {t('links.'+nav.id)}
                </a>
              </li>
          ))}
          <li className={`font-nunito font-normal cursor-pointer text-[18px] text-bright`}>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} className='m-2' style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
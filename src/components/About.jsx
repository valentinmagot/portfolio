import React from 'react'

//import styles
import styles from '../sytles'

//import assets
import {elipse, vector} from '../assets'

//import conatants
import {about, socialMedia} from '../constants'

const About = () => {
  return (
    <section id='about' className={`flex flex-col sm:pt-16 pt-6 w-full`}>
      <div className={`flex-1 ${styles.flexStart} flex-col md:flex-row xl:px-0 sm:px-16 px-6 w-full`}>
        <div className='w-full flex flex-col justify-between items-left py-[6px] py-4 mb-2'>
          <h4 className='font-comfortaa text-[18px] ss:text-[48px] font-bold text-dark'>{about.title}</h4>
          <p className={`${styles.paragraph} mt-8 max-w-[486px] opacity-40`}>
          {about.description}
          </p>
          <a href="mailto:valentin_magot@outlook.com" target='_blank' ><button className='bg-primary mt-4 font-roboto ss:text-[18px] text-[14px] text-bold py-[8px] px-[24px] w-fit rounded-lg hover:animate-pulse'>Get in touch</button></a>
        </div>
        <img className="flex self-center ss:self-start h-[100px] w-[100px] ss:h-auto ss:w-auto mt-4 md:mt-0" src={elipse} alt='my elipse' />
      </div>
      <div className='flex flex-col py-4 justify-between items-center mt-4 sm:mt-20'>
        <div className='flex flex-row justify-between items-center'>
         {socialMedia.map((media) => (
          <a key={media.id} href={media.link} target="_blank"><img src={media.icon} alt={media.id}/></a>
         ))}
        </div>
        <p>&copy; MIT - Valentin Magot 2022</p>
      </div>
      {/* <img className="relative bottom-0 flex self-center flex-1  w-full" src={vector} alt='footer' /> */}
    </section>
  )
}

export default About
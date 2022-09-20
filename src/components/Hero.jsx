import React from 'react'

//import Styles
import styles from '../sytles'

//import assets
import { me_removebg, yellow_bg } from '../assets'

// import resume
import resume from '../assets/cv.pdf'

//import constant
import { landing, tech } from '../constants'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:w-1/2 w-full`}>
        <div className='flex flex-row items-center py-[6px] py-4 mb-2 font-raleway text-[14px] ss:text-[20px] font-bold bold text-primary'>
          <h2>{landing.occupation}</h2>
        </div>
        <div className='flex flex-col justify-between items-left w-full'>
          <h1 className='flex-1 font-roboto font-bold ss:text-[64px] text-[24px] text-highEmphasis'>{landing.title}<br /> {landing.name}</h1>
          <p className={`${styles.paragraph} mt-6 max-w-[486px] opacity-60`}>
          {landing.description}
          </p>
          <div className='flex flex-row justify-between items-center mt-[22px] md:w-1/3 w-full'>
            {tech.map((media) => (
              <img key={media.id} src={media.icon} alt={media.id}/>
            ))}
          </div>
          <div className='flex flex-1 flex-row mt-8 font-roboto ss:text-[18px] text-[14px] text-bold jsutify-between items-left gap-3 w-full'>
            <a href={resume} target='_blank' ><button className='bg-primary py-[8px] px-[24px] w-fit rounded-lg hover:animate-pulse'>Resume</button></a>
            <a href='https://www.linkedin.com/in/valentin-magot-146506128/' target='_blank'><button className={`${styles.buttonSecondary}`}>LinkedIn</button></a>
          </div>
        </div>
      </div> 
      <div className={`hidden flex-1 md:flex ${styles.flexCenter} absolute w-[50%] top-0 right-0 -z-50`} >
        <img src={yellow_bg} alt='bg' className='w-[100%] h-screen'/>
      </div>
      <div className={`hidden md:flex ${styles.flexCenter} absolute bottom-0 right-0 -z-10`} >
        <img src={me_removebg} alt='bg2' className='w-[460px] h-[460px]'/>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'

//import styles
import styles from '../sytles'

//import constants
import { experience } from '../constants'

//import components
import { Card } from '../components'

const Experience = () => {
  return (
    <section id='experience' className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 w-full`}>
        <div className='flex flex-row items-center py-[6px] py-4 mb-2 font-comfortaa text text-[18px] ss:text-[48px] font-bold text-highEmphasis'>
            <h3 className='border-primary border-b-4 rounded'>Experience</h3>
        </div>
        {experience.map((exp, index) => (
            <Card 
              key={exp.id}
              isEven={index % 2 == 0}
              title={exp.title}
              content={exp.content}
              img={exp.img}
              isProject={false} />
        ))}
      </div>
    </section>
  )
}

export default Experience
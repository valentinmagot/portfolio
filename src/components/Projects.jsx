import React from 'react'

//import styles
import styles from '../sytles'

//import constants
import { projects } from '../constants'

//import components
import { Card } from '../components'

const Projects = () => {
  return (
    <section id='projects' className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 w-full`}>
        <div className='flex flex-row items-center py-[6px] py-4 mb-2 font-comfortaa text text-[18px] ss:text-[48px] font-bold text-highEmphasis'>
            <h3 className='border-primary border-b-4 rounded'>Projects</h3>
        </div>
        {projects.map((proj) => (
            <Card 
              key={proj.id}
              title={proj.title}
              content={proj.content}
              link={proj.link}
              img={proj.img}
              isProject={true} />
        ))}
      </div>
    </section>
  )
}

export default Projects
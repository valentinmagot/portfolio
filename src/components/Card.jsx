import React from 'react'

//import styles
import styles from '../sytles'

// import resume
import resume from '../assets/cv.pdf'


const Card = (props) => {
    const img = props.img;
    const title = props.title;
    const content = props.content;
    const link = props.link
    const isProject = props.isProject;
  return (
    <div className="flex justify-center my-[40px]">
    <div className="flex flex-col sm:flex-row sm:max-w-2xl rounded-lg bg-white shadow-lg lg:w-[950px]">
        {isProject && <img className="w-full h-64 sm:h-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg sm:w-1/2" src={img} alt={`${isProject ? 'projects' : 'experiences'}`} />}
        <div className="p-6 flex flex-col justify-center">
        <h5 className="text-highEmphasis font-comfortaa font-bold ss:text-[24px] text-[16px] font-medium mb-2">{title}</h5>
        <p className="text-mediumEmphasis font-nunito ss:text-[16px] text-[12px] mb-4">
            {content} {!isProject && <a href={resume} className='text-primary font-bold'>resume.</a>}
        </p>
        
        {isProject && 
          <a href={link} target='_blank'><button className={`${styles.buttonSecondary} ss:text-[14px] text-[8px] font-bold`}>View Project</button></a>
        }
        </div>
        {!isProject && <img className="w-full h-64 sm:h-auto rounded-b-lg sm:rounded-none sm:rounded-r-lg sm:w-1/2" src={img} alt={`${isProject ? 'projects' : 'experiences'}`} />}
    </div>
    </div>
  )
}

export default Card
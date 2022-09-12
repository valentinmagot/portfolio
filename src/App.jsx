import React from 'react'

//Styles
import styles from './sytles'

//components
import {  Navbar, Hero, Projects, Experience, About } from './components';

const App = () => (
    <div className='bg-transparent w-full overflow-hidden'>
    <div className='h-screen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
           <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
      </div>
      </div>
      <div className={`bg-drab ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Projects />
            <Experience />
          </div>
      </div>
      <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
          </div>
      </div>
      
    </div>
);

export default App
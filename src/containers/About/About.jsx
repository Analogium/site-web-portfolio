import React from 'react'
import './About.scss'

import { motion } from 'framer-motion';
import { images } from '../../constants';
import CV from '../../assets/CV_theo_lambert.pdf';


const About = () => {
  return (
    <section id='informations'>
      <div className="app__about app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__about-info"
        >
          <div className="app__about-badge">
            <div className="badge-cmp app__flex">
              <div className="circular--landscape"> 
                <img src={images.me} alt='Ma tête'/> 
              </div>
            </div>

            <div className="app__about-text">
              <div style={{ marginLeft: 20 }}>
                <h1 className='p-text'>Bonjour !</h1>
                <p className="p-text">Je m'appelle <strong>Théo</strong> et je suis <strong>développeur full stack</strong>.</p>
              </div>
              <div className='app__about-download'>
                <a href={CV} download>Télécharger mon CV</a>
              </div>
            </div>

          </div>
        </motion.div>
        
        
      </div>
    </section>
  )
}

export default About
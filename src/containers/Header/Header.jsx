import React from 'react'
import './Header.scss'

import { motion } from 'framer-motion';
import { images } from '../../constants';
import CV from '../../assets/CV_theo_lambert.pdf';


const Header = () => {
  return (
    <section id='Accueil'>
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <div class="circular--landscape"> 
                <img src={images.me} alt='Ma tête'/> 
              </div>
            </div>

            <div className="app__header-text">
              <div style={{ marginLeft: 20 }}>
                <h1 className='p-text'>Bonjour !</h1>
                <p className="p-text">Je m'appelle <strong>Théo</strong> et je suis <strong>développeur full stack</strong>.</p>
              </div>
              <div className='app__header-download'>
                <a href={CV} download>Télécharger mon CV</a>
              </div>
            </div>

          </div>
        </motion.div>
        
        
      </div>
    </section>
  )
}

export default Header
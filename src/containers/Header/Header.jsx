import React from 'react'
import './Header.scss'

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <h1 className="head-text">Bienvenue sur mon site portfolio !</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Vous trouverez sur ce site des infos me concernant ainsi que des affiches de mes différents projets que j'ai réalisé lors de ma vie en tant que développeur web.</p>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Header
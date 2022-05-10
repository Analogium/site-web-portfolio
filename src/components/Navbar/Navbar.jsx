import React, { useState } from 'react'
import {images} from '../../constants'
import  { HiMenuAlt4, HiX} from 'react-icons/hi'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {IoShareSocialOutline} from 'react-icons/io5'
import {GiSkills} from 'react-icons/gi'
import {motion} from 'framer-motion'

import './Navbar.scss'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const style = { color: "white", fontSize: "3vhmax" }
  const data = {'Accueil': <AiOutlineHome style={style}/>, 'informations': <FaRegUser style={style}/>, 'contact': <IoShareSocialOutline style={style}/>,
   'competences': <GiSkills style={style}/>};


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
        {['Accueil', 'informations', 'competences', 'contact'].map((item) => (
          <li className='app__flex p-text'  key={`link-${item}`}>
            <a href={`#${item}`}>{data[item]}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div
              whileInView={{x : [100, 0]}}
              transition={{ duration: 0.85, ease: 'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul>
                {['Accueil', 'informations', 'competences', 'contact'].map((item) => (
                  <li   key={item}>
                    <a href={`#${item}`}>{data[item]}</a>
                  </li>
                ))}
              </ul>

            </motion.div>
          )}


      </div>
    </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import {images} from '../../constants'
import  { HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {BsTwitter, BsTwitch, BsInstagram, BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'


import './Navbar.scss'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);



  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
        {['informations', 'competences', 'contact'].map((item) => (
          <li className='app__flex p-text'  key={`link-${item}`}>
            <a href={`#${item}`} title={`${item}`} className='link'>{item}</a>
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
              <ul className='menu_link'>
                {['informations', 'competences', 'contact'].map((item) => (
                  <li   key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>

              <ul className='social_media_menu'>
                <li>
                  <a href='https://www.twitch.tv/imaginemylife' >
                    <BsTwitch />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/theo__lmbt/' >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/profile.php?id=100005523438840' >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Analogium' >
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/lambert-theo-6010211b9/' >
                    <BsLinkedin />
                  </a>
                </li>
              </ul>

            </motion.div>
          )}


      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import './About.scss'
import {images} from '../../constants'


const About = () => {
  return (
    <section id='informations'>
      <div className="app__about app__flex">
        <div class="circular--landscape"> <img src={images.me} /> </div>

        <h2 className='head-text'>
          C'est moi avant la quarantaine.
        </h2>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './Skills.scss'

import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='competences' >
      <div className='app__skills'>
        <div className='app__skills-info'>
        
          <h1>Quels sont mes compétences ?</h1>

          <div className='container experience__container'>
            <div className='experience__frontend'>
              <h2 className='s-text'>Frontend</h2>
              <div className='experience__content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>HTML</h4>
                    <small className='s-text'>4/5</small>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>CSS</h4>
                    <small className='s-text'>4/5</small>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>JS</h4>
                    <small className='s-text'>4/5</small>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>React</h4>
                    <small className='s-text'>4/5</small>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>Angular</h4>
                    <small className='s-text'>4/5</small>
                </article>
              </div>
            </div>

            <div className='experience__backend'>
              <h2 className='s-text'>Backend</h2>
              <div className='experience__content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>Python</h4>
                    <small className='s-text'>4/5</small>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>PHP</h4>
                    <small className='s-text'>4/5</small>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>SQL</h4>
                    <small className='s-text'>4/5</small>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='s-text'/>
                    <h4 className='s-text'>Node JS</h4>
                    <small className='s-text'>4/5</small>
                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
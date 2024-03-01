import React from 'react';
import './Header.scss';

import { images } from '../../constants';
import {
  BsTwitch,
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';

const Header = () => {
  return (
    <section id="Accueil">
      <div className="app__header app__flex">
        <div className="content">
          <div className="author">
            <h1>Theo Lambert</h1>
          </div>

          <div className="job">
            <h3>Développeur Web</h3>
          </div>
        </div>
        <div className="logo_header">
          <img src={images.logo_header} alt="logo-header" />
        </div>

        <ul className="social_media">
          <li>
            <a href="https://www.twitch.tv/imaginemylife">
              <BsTwitch />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/theo__lmbt/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100005523438840">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/Analogium">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lambert-theo-6010211b9/">
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

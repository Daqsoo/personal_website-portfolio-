import React from 'react';

import GitHub from '../img/gitHub.svg';
import linkedIn from '../img/linkedIn.png';
import insta from '../img/instagram.svg';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <div class="footer__wrapper">
          <ul class="social">
            <li class="social__item">
              <Link to="https://github.com/Daqsoo" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="Link" />
              </Link>
            </li>
            <li class="social__item">
              <Link
                to="https://www.linkedin.com/in/daqsoo/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={linkedIn} alt="Link" />
              </Link>
            </li>
            <li class="social__item">
              <Link
                to="https://www.instagram.com/daqso0/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={insta} alt="Link" />
              </Link>
            </li>
          </ul>
          <div class="copyright">
            <p>© 2023 Daqsoo (Daniel Shakhnovich) </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

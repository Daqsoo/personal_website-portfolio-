import React from 'react';

import GitHub from '../img/gitHub.svg';
import linkedIn from '../img/linkedIn.png';
import insta from '../img/instagram.svg';

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <div class="footer__wrapper">
          <ul class="social">
            <li class="social__item">
              <a href="#!">
                <img src={GitHub} alt="Link" />
              </a>
            </li>
            <li class="social__item">
              <a href="#!">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
            <li class="social__item">
              <a href="#!">
                <img src={insta} alt="Link" />
              </a>
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

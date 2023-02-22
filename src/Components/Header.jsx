import React from 'react';

function Header() {
  return (
    <div className="main-layout">
      <div className="nav">
        <div className="nav-row">
          <div className="nav-logo">
            <a href="./index.html">
              <strong>Daqsoo</strong>
              Portfolio
            </a>
          </div>
          <ul className="nav-menu">
            <li className="item">
              <a href="" className="link">
                {' '}
                Projects{' '}
              </a>
            </li>
            <li className="item">
              <a href="./skills.html" className="link">
                {' '}
                Skills{' '}
              </a>
            </li>
            <li className="item">
              <a href="./contacts.html" className="link">
                {' '}
                Contacts{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;

import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="main-layout">
      <div className="nav">
        <div className="nav-row">
          <div className="nav-logo">
            <Link to="/">
              <strong>Daqsoo </strong>
              Portfolio
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="item">
              <Link to="/projects" className="link">
                {' '}
                Projects{' '}
              </Link>
            </li>
            <li className="item">
              <Link to="/skills" className="link">
                {' '}
                Skills{' '}
              </Link>
            </li>
            <li className="item">
              <Link to="/contacts" className="link">
                {' '}
                Contacts{' '}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;

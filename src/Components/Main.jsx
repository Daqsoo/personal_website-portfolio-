import React from 'react';
import mainLogo from '../img/squares.png';
import Project1 from '../img/Project1.png';

function Main() {
  return (
    <>
      <div className="main">
        <img className="main-img" src={mainLogo} alt="MainImg" />
        <div className="main-block">
          <h1 className="main-title">
            <strong>
              Hi, my name is <i>Daniel</i>
            </strong>
            <br />
            <p>a front-end developer</p>
          </h1>
          <div className="main-text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="/" className="btn">
            Download CV
          </a>
        </div>
      </div>
      <div className="main-projects">
        <strong>Projects</strong>
      </div>
      <div className="main-projects-table">
        <a href="./skills.html" className="main-projects-table-element">
          <img src={Project1} alt="ProjectTableImg" />
          <p>Sneaker Shop</p>
        </a>
        <a href="./skills.html" className="main-projects-table-element">
          <img src={Project1} alt="ProjectTableImg" />
          <p>Sneaker Shop</p>
        </a>
        <a href="./skills.html" className="main-projects-table-element">
          <img src={Project1} alt="ProjectTableImg" />
          <p>Sneaker Shop</p>
        </a>
        <a href="./skills.html" className="main-projects-table-element">
          <img src={Project1} alt="ProjectTableImg" />
          <p>Sneaker Shop</p>
        </a>
        <a href="./skills.html" className="main-projects-table-element">
          <img src={Project1} alt="ProjectTableImg" />
          <p>Sneaker Shop</p>
        </a>
        <a href="./skills.html" className="main-projects-table-element">
          <img src={Project1} alt="ProjectTableImg" />
          <p>Sneaker Shop</p>
        </a>
      </div>
    </>
  );
}

export default Main;

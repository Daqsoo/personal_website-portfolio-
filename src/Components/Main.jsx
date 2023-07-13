import React from 'react';

import mainLogo from '../img/squares.png';
import SneakersShop from '../img/Project1.png';
import PizzaShop from '../img/Project2.png';
import MERNBlog from '../img/Project3.png';

import { Link } from 'react-router-dom';

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
          <Link to="/" className="btn">
            Download CV
          </Link>
        </div>
      </div>
      <div className="main-projects">
        <strong>Projects</strong>
      </div>
      <div className="main-projects-table">
        <Link
          to="https://github.com/Daqsoo/daqsoo-sneakers"
          target="_blank"
          rel="noopener noreferrer"
          className="main-projects-table-element">
          <img src={SneakersShop} alt="ProjectTableImg" />
          <p>Sneaker Shop</p>
        </Link>
        <Link
          to="https://github.com/Daqsoo/pizza_shop"
          target="_blank"
          rel="noopener noreferrer"
          className="main-projects-table-element">
          <img src={PizzaShop} alt="ProjectTableImg" />
          <p>Pizza Shop</p>
        </Link>
        <Link
          to="https://github.com/Daqsoo/mern-blog-front"
          target="_blank"
          rel="noopener noreferrer"
          className="main-projects-table-element">
          <img src={MERNBlog} alt="ProjectTableImg" />
          <p>MERN Blog</p>
        </Link>
      </div>
    </>
  );
}

export default Main;

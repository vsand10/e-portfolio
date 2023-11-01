import React from "react";
import Navbar from "./Navbar";
import {useTheme } from "./ThemeContext"
import ME from '../assests/bitmoji.png'





const Home = () => {

  const {darkMode} = useTheme();



  return (
    <div id="Home"className='home-container' data-theme={darkMode} >
      <Navbar  />
      <div className="home-image"  >
        <img src={ME} alt=" Logo" className="ME" />
        <div className="about-me">
          <h1 className='header-name'>Hey! I'm Victor Sandoval 👋</h1>
          <div className="text-center">
          <p className="text"> 
            I'm a 
            <span className="purple-text"> Sophmore Year Computer Science Student </span>
            at California State University Long Beach.
            
          </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

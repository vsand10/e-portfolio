import React from "react";
import "../App.css";
import js from "../assests/js.png";
import ReactImage from "../assests/download.png";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import PYTHON from "../assests/python-img.png"
import {useTheme } from './ThemeContext'
import NODE from "../assests/node-js.png"





const TechStack = () => {

  const {darkMode} = useTheme();
  
  return (
    <div  id='tech-stack' className="tech-container" data-theme={darkMode}>
      <div className="row">
        <h1 className="stack">Skills</h1>
        <p className="tech-para"> These are the technologies I have worked with</p>
        <div className="tech-images">
          <div className="language"><img src={js} alt="" className="js-image" /><span className="language_name">Javascript</span> </div>
          <div className="language"><img src={ReactImage} alt=""  className="react-image"/><span className="language_name">React</span></div>
          <div className="language"><img src={HTML} alt=""  className="html-image"/><span className="language_name">HTML</span></div>
          <div className="language"><img src={CSS} alt="" className="css-image" /><span className="language_name">CSS</span></div>
          <div className="language"> <img src={PYTHON} alt="" className="python-image" /><span className="language_name">Python</span></div> 
          <div className="language"> <img src={NODE} alt="" className="python-image" /><span className="language_name">NODE JS</span></div> 

        </div>
      </div>
      

     
      
    </div>
  );
};

export default TechStack;

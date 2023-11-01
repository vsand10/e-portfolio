import React from "react";
import "../App.css";
import Sunset from "../assests/sunset.jpg"
import {useTheme}from './ThemeContext'
import Food from "../assests/Food.png"

import dragon from "../assests/dragon_trainer.png"
import expense from "../assests/expense-tracker.png"
import new_quote from "../assests/new_quote.png"


const Projects = () => {

  const {darkMode} = useTheme();

  


    return (
      <div  id='projects' className='projects-container' data-theme={darkMode}>
        <h1 className="project-header"> Here are some of my projects</h1>
        <div className="wrapper">
        <div className="project">
            <img src={Sunset} alt="" className="project-1" />
        <div className="content">
          <h1>Weather App</h1>
          <p>Simple Weather App that displays the weather of inputted location</p>
          <p ><a className=" weather-app-link"  href="https://vsand10.github.io/weather-app/" target="_blank">Link</a></p>
        </div>
        </div>
        <div className="project-2  project">
          <img src={dragon} alt="" className="Food" />

        
        <div className="project2-content">
          <h1> Dragon Trainer Python </h1>
          <p>Created in my CS class and uses python classes and the user must defeat 3 dragons to win</p>
          <p ><a className=" weather-app-link"  href="https://replit.com/@VictorSandoval8/lab8" target="_blank">Link</a></p>

        </div>
        </div>

        <div className="project-3  project">
          <img src={new_quote} alt="" className="quote" />
    
        <div className="project3-content">
          <h1>Quote Generator</h1>
          <p>Web app that randomizes a quote and displays it</p>
          <p ><a className=" weather-app-link"  href="https://vsand10.github.io/quote-generator/" target="_blank">Link</a></p>
        </div>
        </div>

        <div className="project-3  project">
          <img src={expense} alt="" className="quote" />
       
        <div className="project3-content">
          <h1>Expense-tracker</h1>
          <p>Developed a user-friendly interface that allows users to track their income and expenses.</p>
          <p ><a className=" weather-app-link"  href="https://expense-tracker-27ad6.web.app/" target="_blank">Link</a></p>
        </div>
        </div>

        </div>
      </div>
    );
}

export default Projects;
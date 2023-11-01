import Home from "./compents/Home"
import './App.css';
import TechStack from "./compents/TechStack";
import Projects from "./compents/Projects";
import Footer from "./compents/Footer";
import { ThemeProvider } from './compents/ThemeContext';
import { BsFillMoonStarsFill } from "react-icons/bs";
import useLocalStorage from "use-local-storage";
import {createContext, useState} from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

export const ThemeContext = createContext(null)




function App() {
  
  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    setTheme((curr) => (curr=== 'light' ? 'dark' : 'light'))

  }
 
  return (
    < >

      <Home/>
      <TechStack/>
      <Projects/>
      <Footer/>
     
    </ >
  );
  }
export default App;

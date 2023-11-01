import React from "react"
import '../App.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import VS from '../assests/VS-logo-blue.png'
import Divider from '@mui/material/Divider'
import { Box , Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import List from '@mui/material/List'
import InfoIcon from '@mui/icons-material/Info'
import {HiOutlineBars3} from "react-icons/hi2"
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { PhoneRounded } from "@mui/icons-material";
import FolderIcon from '@mui/icons-material/Folder';
import { BsFillMoonStarsFill } from "react-icons/bs";
import useLocalStorage from "use-local-storage";
import {useTheme } from './ThemeContext'
import HomeIcon from '@mui/icons-material/Home';



 


const Navbar = () =>{

    
    const { darkMode, toggleTheme } = useTheme();


    const [openMenu, setOpenMenu]= useState(false)
    const menuOptions= [
        {
            text: "Home",
            icon : <HomeIcon/>
        },
        {
            text:'Skills',
            icon: <KeyboardIcon/>

        },
        {
            text:'Projects',
            icon: <FolderIcon/>

        }
      
    ]

    
    return(

    <div className="container" data-theme={darkMode} >
        <img src={VS} alt="" className="VS-logo" />
        <ul className="nav-links">
            <li>
                
                 <BsFillMoonStarsFill className="anchor-tags moon" onClick={toggleTheme}/>

                <a href="#Home" className="anchor-tags">Home</a>
                <a href="#tech-stack" className="anchor-tags" > Skills </a>
                <a href="#projects" className="anchor-tags">Projects</a>
                
            </li>
            
        </ul>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open= {openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box 
            sx={{width:250}}
            role= "presentation"
            onClick= {() => setOpenMenu(false)}
            onKeyDown= {() =>  setOpenMenu(false)}
            
            >
            <List>
                {menuOptions.map((item)=> (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                            
                        </ListItemButton>
                      
                    </ListItem>
                    
                ))}
            </List>
           
            <Divider/>
                
            </Box>

        </Drawer>
        

           

      
    </div>
    )
}
export default Navbar 

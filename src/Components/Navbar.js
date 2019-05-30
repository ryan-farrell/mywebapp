// Will create my nav bar from this functional class component

import React from 'react';  //Standard code in every component file to link
import './Comp CSS/Navbar.css';
import SocialsButtons from './Socials';

const text = "{Ryan Farrell || Software Developer};"

class Nav extends React.Component {
    render () {
    return (
        
    <nav>
           <p className = "titleName">{text}</p>
        <ul>
            <li><p>Home</p></li>
            <li><p>Contacts</p></li>
            <li><p>Projects</p></li>
            <li><p>Old CV</p></li>
        </ul>

<SocialsButtons/>
        
        </nav>

        
       
        )
    } 
}

export default Nav;  //Standard code in every component file to allow its use in another component

// This component will include my curent Codenation work 
//and Image

import React from 'react'
import './Comp CSS/MainBody.css';
const profile = require('../img/Headshot.jpg')
const profile2 = require('../img/profile.jpg')



const MainBody = () => {
        return (
        <div className = "header">
            
            <img alt = "Profile" src = {profile2} className = "frontImage"></img>
            <img alt = "" src = {profile} className = "backImage"></img>
            
            
            <p>Code Nation Text to go here</p>
            <ul>
                
            <li>Email</li>
            <li>Mobile</li>
            <li>CodeNation www</li>
            <li>Manchester, UK</li>

             
             
                </ul>
            

        </div>
                  
    )
}
 

 export default MainBody;   


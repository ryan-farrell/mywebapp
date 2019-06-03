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
            
            <div className = "textBox">
            <p>Currently attending a Coding Bootcamp @ Code Nation. Looking to graduate early July'19 versed and had exposure to a modern day tech stack such as JavaScript, React, Node.js, MongoDB, Swift, mySQL. Using differing methodologies like Waterfall and Agile with lightning talks and stand ups throughout my course. As well as improving my new developing skills daily also using other tech accessories to aid in the above with the likes of Git, Github, Slack, Toggl & Trello.</p>
            
            <ul>
                
            <email>ryan.farrell44@gmail.com</email><br>
            </br>
            <number>07921 237 182</number><br>
            </br>
            <location>Manchester, UK</location><br>
            </br>
            <url>https://wearecodenation.com/</url>
            
             
                </ul>
                
                </div>

        </div>
                  
    )
}
 

 export default MainBody;   


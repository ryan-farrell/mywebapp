//This will create my social buttons from this functional class component

import React from 'react';  //Standard code in every component file to link
import './Comp CSS/Socials.css';



const socialButtons = () => {

    return (


        <ul className = "socialDesign">

            <li> <a href = "https://www.linkedin.com/in/ryan-farrell-a6b64569/" target = "_blank" rel = "noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </li>
            <li> <a href = "https://github.com/ryan-farrell" target = "_blank" rel = "noopener noreferrer"><i className="fab fa-github"></i></a>
        </li>
            <li> <a href = "https://www.facebook.com/ryan.farrell.58555" target = "_blank" rel = "noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
        </li>
            <li> <a href = "https://www.manchestertitans.co.uk" target = "_blank" rel = "noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
        </li>

        </ul>
        

        )
    
}

export default socialButtons;  //Standard code in every component file to allow its use in another component


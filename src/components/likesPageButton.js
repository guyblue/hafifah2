import React from 'react';
import '../css-files/App.css';


import buttonPic from '../metirial-pics/likes button heart picture.png';

const likesPageButtonDiv = () =>{
    
    return(
        <div id="likesPageButtonID" className="likesPageButton">
            <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
            <p className="likesButtonText">liked pictures</p>
        </div>
    )
}

export default likesPageButtonDiv;
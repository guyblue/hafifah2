import React from 'react';
import styles from '../css-files/App.css';


import buttonPic from '../src/likes button heart picture.png'

const likesPageButton = () =>{
    
    return(
        <div className="likesPageButton">
            <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
            <p className="likesButtonText">liked pictures</p>
        </div>
    )
}
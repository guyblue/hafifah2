import React, { render } from 'react';
import LikedPicsPage from '../likedPicsPage.js';
import '../css-files/App.css';


import buttonPic from '../metirial-pics/likes button heart picture.png';

const likesPageButtonDiv = () =>{
    
    return(
        <div id="likesPageButtonID" className="likesPageButton" onClick={()=>render(<LikedPicsPage />)}>
            <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
            <p className="likesButtonText">liked pictures</p>
        </div>
    )
}

export default likesPageButtonDiv;
// the liked pictures site, in
// which the liked pics are displayed

import React from 'react';

import { 
    Switch , 
    Route, 
    Link 
} from "react-router-dom";
import './css-files/App.css';

import buttonPic from './metirial-pics/likes button heart picture.png';

const LikedPicsPage = () =>{


    return(
        <div>
            <h1>Pictures you liked</h1>

            <Link to="">
                <div id="backMainPageButton" className="likesPageButton">
                    <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
                    <p className="likesButtonText">back to main</p>
                </div>
            </Link>
        </div>
    )
}

export default LikedPicsPage;
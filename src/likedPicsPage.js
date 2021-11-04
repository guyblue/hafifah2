// the liked pictures site, in
// which the liked pics are displayed

import React, { useState } from 'react';

import { Link } from "react-router-dom";
import './css-files/LikedPicsPageDesgin.css';

import buttonPic from './metirial-pics/likes button heart picture.png';

const LikedPicsPage = () =>{
    const [likedPics , setLikedPics] = useState(JSON.parse(localStorage.getItem('likedPics')));

    return(
        <div className="App">
            <h1 className="title">Pictures you liked</h1>

            <Link to="">
                <div id="backMainPageButton" className="mainPageButton">
                    <img className="mainPageButtonPic" src={buttonPic} alt="buttonPic" />
                    <p className="mainButtonText">back to main</p>
                </div>
            </Link>
        </div>
    )
}

export default LikedPicsPage;
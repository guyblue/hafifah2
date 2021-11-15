import React from 'react';
import { Link } from "react-router-dom";
import buttonPic from '../metirial-pics/LikesButtonHeartPicture.png';
import '../css-files/mainPage.css';

const likesPageButtonDiv = () => {

    return (
        <Link className="nextSiteLink" to="/likedPicsPage">
            <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
            <p className="likesButtonText">liked pictures</p>
        </Link>
    )
}

export default likesPageButtonDiv;
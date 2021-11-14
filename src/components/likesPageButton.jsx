import React from 'react';
import { Link } from "react-router-dom";
import buttonPic from '../metirial-pics/likes button heart picture.png';
import '../css-files/mainPage.css';

const likesPageButtonDiv = () => {

    return (
        <Link className="nextSiteLink" to="/likedPicsPage.jsx">
            <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
            <p className="likesButtonText">liked pictures</p>
            {/*TODO: delete div and reorgenize the imports --> fixed*/}
        </Link>
    )
}

export default likesPageButtonDiv;
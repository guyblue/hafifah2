import React from 'react';
import { Link } from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
// import buttonPic from '../metirial-pics/LikesButtonHeartPicture.png';
import '../css-files/mainPage.css';

const likesPageButtonDiv = () => {

    return (
        <Link className="nextSiteLink" to="/likedPicsPage">
            {/* <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" /> */}
            <Favorite className="likesPageButtonPic" sx={{color: pink[500] }} />
            <p className="likesButtonText">liked pictures</p>
        </Link>
    )
    // TODO: replace next site button pic to an MUI icon-->done
}

export default likesPageButtonDiv;
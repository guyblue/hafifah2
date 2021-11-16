import React from 'react';
import { Link } from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import '../css-files/mainPage.css';

const likesPageButtonDiv = () => {

    return (
        <Link className="nextSiteLink" to="/likedPicsPage">
            <Favorite className="likesPageButtonPic" sx={{color: pink[500] , fontSize: '25vmin'}} />
            <p className="likesButtonText">liked pictures</p>
        </Link>
    )
}

export default likesPageButtonDiv;
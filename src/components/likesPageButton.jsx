import React from 'react';
import { Link } from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import styles from '../css-files/mainPage.module.css';
import { Varaibles } from '../css-files/mainPage.module.css';

const likesPageButtonDiv = () => {

    // const buttonColor = () =>{
    //     return Variables.sx`color: var(----heart-color);`
    // }

    return (
        <Link className={styles.nextSiteLink} to="/likedPicsPage">
            <Favorite className={styles.likesPageButtonPic} sx={{color: pink[500] , fontSize: '25vmin'}} />
            <p className={styles.likesButtonText}>liked pictures</p>
        </Link>
    )
}

export default likesPageButtonDiv;
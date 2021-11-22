import React from 'react';
import { Link } from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import styles from '../css-files/mainPage.module.css';

const likesPageButtonDiv = () => {
    return (
        <Link className={styles.nextSiteLink} to="/likedPicsPage">
            <Favorite className={styles.likesPageButtonPic} sx={{color: "var(--heart-color)" , fontSize: '25vmin'}} />
            <p className={styles.likesButtonText}>liked pictures</p>
        </Link>
    )
}

export default likesPageButtonDiv;
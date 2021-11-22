import React from 'react';
import { Link } from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import LikedPicsTable from '../components/displayLikedPics.jsx';
import styles from '../css-files/LikedPicsPage.module.css';

const LikedPicsPage = () =>{
    return(
            <div className={styles.App}>
                <h1 className={styles.title}>Pictures you liked</h1>
                <LikedPicsTable />
                <Link className={styles.mainPageButton} to="">
                <Favorite className={styles.mainPageButtonPic} sx={{color: pink[500] }} />
                        <p className={styles.mainButtonText}>back to main</p>
                </Link>
            </div>
    )
}

export default LikedPicsPage;
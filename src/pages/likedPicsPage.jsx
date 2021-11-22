import React from 'react';
import { Link } from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import LikedPicsTable from '../components/displayLikedPics.jsx';
import '../css-files/LikedPicsPage.css';

const LikedPicsPage = () =>{
    return(
            <div className="App">
                <h1 className="title">Pictures you liked</h1>
                <LikedPicsTable />
                <Link className="mainPageButton" to="">
                <Favorite className="mainPageButtonPic" sx={{color: pink[500] }} />
                        <p className="mainButtonText">back to main</p>
                </Link>
            </div>
    )
}

export default LikedPicsPage;
import React from 'react';
import { Link } from "react-router-dom";
import LikedPicsTable from './components/displayLikedPics.js';
import buttonPic from './metirial-pics/likes button heart picture.png';
import './css-files/LikedPicsPageDesign.css';

const LikedPicsPage = () =>{

    return(
        <div className="App">
            <h1 className="title">Pictures you liked</h1>

            <LikedPicsTable />

            <Link className="prevSiteLink" to="">
                <div className="mainPageButton">
                    <img className="mainPageButtonPic" src={buttonPic} alt="buttonPic" />
                    <p className="mainButtonText">back to main</p>
                </div>
            </Link>
        </div>
    )
}

export default LikedPicsPage;
import React from 'react';
import { Link } from "react-router-dom";
import LikedPicsTable from '../components/displayLikedPics.jsx';
import buttonPic from '../metirial-pics/LikesButtonHeartPicture.png';
import '../css-files/LikedPicsPage.css';

const LikedPicsPage = () =>{

    return(
        <div className="App">
            <h1 className="title">Pictures you liked</h1>

            <LikedPicsTable />

            <Link className="mainPageButton" to="">
                    <img className="mainPageButtonPic" src={buttonPic} alt="buttonPic" />
                    <p className="mainButtonText">back to main</p>
            </Link>
        </div>
    )
}

export default LikedPicsPage;
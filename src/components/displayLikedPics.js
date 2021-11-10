import React, { useState } from 'react';
import '../css-files/LikedPicsPageDesign.css';

import Dislike from '../metirial-pics/dislike.png';

const LikedPicsFrames = () => {
    const [likedPics, setLikedPics] = useState(JSON.parse(localStorage.getItem('likedPics')));

    const dislike = (link) =>{
        let changes = [...JSON.parse(localStorage.getItem('likedPics'))];
        changes.splice(changes.indexOf(link), 1);
        localStorage.setItem('likedPics', JSON.stringify(changes));
        setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    }

    return (
        <div className="likedPicsTable">{
            likedPics.map((x) => 
                <div className="likedPicsFrame" id={"frame/" + x} key={likedPics.indexOf(x)}>

                    <img className="likedPicture" id={"picture/" + x} src={x} alt="likedPic" />
                    <img className="dislikeButton" id={"dislike/" + x} src={Dislike} alt="dislikeButton" onClick={() => {
                        dislike(x);
                    }} />

                </div>
            )
        }
        </div>
    );
}

export default LikedPicsFrames;
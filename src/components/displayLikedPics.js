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
            likedPics.map((currPic) => 
                <div className="likedPicsFrame" key={likedPics.indexOf(currPic)}>

                    <img className="likedPicture" src={currPic} alt="likedPic" />
                    <img className="dislikeButton" src={Dislike} alt="dislikeButton" onClick={() => dislike(currPic)} />
{/*TODO: delete id, change alt, remove {} in onClick--> onClick removed, id removed*/}
                </div>
            )
        }
        </div>
    );
}

export default LikedPicsFrames;
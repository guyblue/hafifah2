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
        ((!likedPics)?<p>no pictures have been liked yet</p>
        :<div className="likedPicsTable">{
            likedPics.map((currPic) => 
                <div className="likedPicsFrame" key={likedPics.indexOf(currPic)}>

                    <img className="likedPicture" src={currPic} alt="the_Liked_Pic_Was_Not_Loading" />
                    <img className="dislikeButton" src={Dislike} alt="Dislike_Button_Pic_Was_Not_Loading" onClick={() => dislike(currPic)} />
{/*TODO: delete id, change alt, remove {} in onClick--> fixed*/}
                </div>
            )
        }
        </div>
        )
    );
}

export default LikedPicsFrames;
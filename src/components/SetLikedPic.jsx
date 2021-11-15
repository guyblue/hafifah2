import React, { useState } from 'react';
import { Favorite , FavoriteBorder } from '@mui/icons-material';
import Dislike from '../metirial-pics/dislike.png';
import '../css-files/LikedPicsPage.css';

const SetLikedPic = ({pic , dislike}) =>{
    const [isDislikeHover , setIsDislikeHover] = useState(false);

    // const dislike = (link) =>{
    //     let changes = [...JSON.parse(localStorage.getItem('likedPics'))];
    //     changes.splice(changes.indexOf(link), 1);
    //     localStorage.setItem('likedPics', JSON.stringify(changes));
    //     setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    // }

    return(
        <div className="likedPicsFrame">

        <img className="likedPicture" src={pic} alt="the_Liked_Pic_Was_Not_Loading" />
        <div
        onMouseOver={() =>(!isDislikeHover) && setIsDislikeHover(true)}
        onMouseOut={() =>(isDislikeHover) && setIsDislikeHover(false)}
        >
            {(isDislikeHover?<FavoriteBorder className="dislikeButton" onClick={()=>dislike(pic)} />:<Favorite className="dislikeButton" />)}
        </div>
        {/* <img className="dislikeButton" src={Dislike} alt="Dislike_Button_Pic_Was_Not_Loading" onClick={() => dislike(currPic)} /> */}
    {/*TODO: delete id, change alt, remove {} in onClick--> fixed*/}
    </div>
    )
}

export default SetLikedPic;
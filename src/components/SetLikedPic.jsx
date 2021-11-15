import React, { useState } from 'react';
import { Favorite , FavoriteBorder } from '@mui/icons-material';
import '../css-files/LikedPicsPage.css';

const SetLikedPic = ({pic , dislike}) =>{
    const [isDislikeHover , setIsDislikeHover] = useState(false);

    return(
        <div className="likedPicsFrame">

        <img className="likedPicture" src={pic} alt="the_Liked_Pic_Was_Not_Loading" />
        <div
        onMouseOver={() =>(!isDislikeHover) && setIsDislikeHover(true)}
        onMouseOut={() =>(isDislikeHover) && setIsDislikeHover(false)}
        >
            {(isDislikeHover?<FavoriteBorder className="dislikeButton" onClick={()=>dislike(pic)} />:<Favorite className="dislikeButton" />)}
        </div>
    {/*TODO: delete id, change alt, remove {} in onClick--> fixed*/}
    </div>
    )
}

export default SetLikedPic;
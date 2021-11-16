import React, { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import '../css-files/LikedPicsPage.css';

const SetLikedPic = ({ pic, dislike }) => {
    const [isDislikeHover, setIsDislikeHover] = useState(false);

    return (
        <div className="likedPicsFrame">
            <img className="likedPicture" src={pic} alt="pic_Not_Loading" />
            <div className="dislikeButton"
                onMouseOver={() => (!isDislikeHover) && setIsDislikeHover(true)}
                onMouseLeave={() => (isDislikeHover) && setIsDislikeHover(false)}
            >
                {(isDislikeHover ?
                    <FavoriteBorder className="dislikeIcon" onClick={() => dislike(pic)} /> :
                    <Favorite className="dislikeIcon" />)}
            </div>
        </div>
    )
}

export default SetLikedPic;
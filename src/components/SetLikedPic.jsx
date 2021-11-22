import React, { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import styles from '../css-files/LikedPicsPage.module.css';

const SetLikedPic = ({ pic, dislike }) => {
    const [isDislikeHover, setIsDislikeHover] = useState(false);

    return (
        <div className={styles.likedPicsFrame}>
            <img className={styles.likedPicture} src={pic} alt="pic_Not_Loading" />
            <div className={styles.dislikeButton}
                onMouseOver={() => (!isDislikeHover) && setIsDislikeHover(true)}
                onMouseLeave={() => (isDislikeHover) && setIsDislikeHover(false)}
            >
                {(isDislikeHover ?
                    <FavoriteBorder className={styles.dislikeIcon}  sx={{color: "var(--dislike-color)" }} onClick={() => dislike(pic)} /> :
                    <Favorite className={styles.dislikeIcon}  sx={{color: "var(--dislike-color)" }} />)}
            </div>
        </div>
    )
}

export default SetLikedPic;
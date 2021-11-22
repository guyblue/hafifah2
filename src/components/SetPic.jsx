import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Close, FavoriteBorder, FavoriteTwoTone } from '@mui/icons-material';
import styles from '../css-files/mainPage.module.css';

const SetPic = () => {
    const [pic, setPicture] = useState();
    const [shouldRefetch, setShouldRefetch] = useState(true);
    const [isLikeHover, setIsLikeHover] = useState(false);
    const [isPicLoading, setIsPicLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => setPicture(res.message));
    }, [shouldRefetch]);

    const like = () => {
        const isExistsInLS = !!localStorage.getItem('likedPics');
        if (!isExistsInLS) {
            let newStorageArray = [];
            newStorageArray.push(pic);
            localStorage.setItem('likedPics', JSON.stringify(newStorageArray));
        }
        else {
            const isAlreadyLiked = (JSON.parse(localStorage.getItem('likedPics')).includes(pic));
            if (!isAlreadyLiked) {
                let newStorageArray = JSON.parse(localStorage.getItem('likedPics'));
                newStorageArray = [...newStorageArray, pic];
                localStorage.setItem('likedPics', JSON.stringify(newStorageArray));
            }
        }
    }

    const changePic = () => {
        setIsPicLoading(true);
        setShouldRefetch(!shouldRefetch);
    }

    return (
        <div className={styles.mainPicOpt}>
            <div className={styles.likeButton} onClick={() => {
                like(true);
                changePic();
            }}
                onMouseOver={() => (!isLikeHover) && setIsLikeHover(true)}
                onMouseLeave={() => (isLikeHover) && setIsLikeHover(false)}
            >
                {(isLikeHover ? <FavoriteTwoTone
                    sx={{ fontSize: '25vmin' }}
                    onClick={() => {
                        like(true);
                        changePic();
                    }} />
                    : <FavoriteBorder sx={{ fontSize: '25vmin' }} />)}
            </div>
            <div className={styles.mainPicDiv}>
                <img className={(isPicLoading ? styles.hidden : styles.mainPic)} src={pic} alt="mainPic" onLoad={() => setIsPicLoading(false)} />
                <CircularProgress className={((!isPicLoading) ? styles.hidden : styles.spinner)} />
            </div>

            <div className={styles.nextPicButton}>
                <Close sx={{ fontSize: '25vmin' }} onClick={() => changePic()} />
            </div>
        </div>
    )
}

export default SetPic;


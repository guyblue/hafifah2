import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import heartEmpty from '../metirial-pics/heart.png';
import heartFull from '../metirial-pics/HeartFilled.png';
import '../css-files/mainPage.css';

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
                // TODO: change 'changes' name to a more reasonable like newArray-->done
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
    // TODO:rename isClicked to shouldRefetch-->done

    return (
        <div className="mainPicOpt">
            <img
                className="sideButton"
                src={(isLikeHover ? heartFull : heartEmpty)}
                alt="likePic" onClick={() => {
                    like(true);
                    changePic();
                }}
                onMouseEnter={() => (!isLikeHover) && setIsLikeHover(true)}
                onMouseOut={() => (isLikeHover) && setIsLikeHover(false)}
            />
            <div className='mainPicDiv'>
                <img className={(isPicLoading ? 'hidden' : 'mainPic')} src={pic} alt="mainPic" onLoad={() => setIsPicLoading(false)} />
                <CircularProgress className={((!isPicLoading) ? 'hidden' : 'spinner')} />
            </div>
            
            <div className="sideButton">
                <CloseIcon sx={{ fontSize: 140 }} onClick={() => changePic()} />
            </div>
        </div>
    )
    // TODO: change the like button and next (blackX) button with MUI icons-->done
}

export default SetPic;


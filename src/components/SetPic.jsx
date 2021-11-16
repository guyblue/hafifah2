import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Close, FavoriteBorder, FavoriteTwoTone } from '@mui/icons-material';
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
            <div className="sideButton" onClick={() => {
                like(true);
                changePic();
            }}
                onMouseOver={() => (!isLikeHover) && setIsLikeHover(true)}
                onMouseLeave={() => (isLikeHover) && setIsLikeHover(false)}
            >
                {(isLikeHover ? <FavoriteTwoTone
                    sx={{ fontSize: 120 }}
                    onClick={() => {
                        like(true);
                        changePic();
                    }} />
                    : <FavoriteBorder sx={{ fontSize: 120 }} />)}
                {/* TODO: change the liking heart pic with MUI icon-->done */}
            </div>
            <div className='mainPicDiv'>
                <img className={(isPicLoading ? 'hidden' : 'mainPic')} src={pic} alt="mainPic" onLoad={() => setIsPicLoading(false)} />
                <CircularProgress className={((!isPicLoading) ? 'hidden' : 'spinner')} />
            </div>

            <div className="sideButton">
                <Close sx={{ fontSize: 140 }} onClick={() => changePic()} />
            </div>
        </div>
    )
    // TODO: change the like button and next (blackX) button with MUI icons-->done
}

export default SetPic;


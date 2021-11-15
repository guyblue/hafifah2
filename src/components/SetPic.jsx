import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import heartEmpty from '../metirial-pics/heart.png';
import heartFull from '../metirial-pics/HeartFilled.png';
import blackX from '../metirial-pics/blackX.png';
import '../css-files/mainPage.css';

const SetPic = () => {
    const [pic, setPicture] = useState();
    const [isClicked, setIsClicked] = useState(true);
    const [isLikeHover, setIsLikeHover] = useState(false);
    const [isPicLoading, setIsPicLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => setPicture(res.message));
        // TODO: you can remove the {} in the setPicture(...);--> done
    }, [isClicked]);

    const like = () => {
        // TODO: remove isLiked, because there's no option of the pic not being liked in the func-->done
        // TODO : make the first func into a variable, and put the whole function in !const-->done
        const isExistsInLS = !!localStorage.getItem('likedPics');
        if (!isExistsInLS) {
            let changes = [];
            changes.push(pic);
            localStorage.setItem('likedPics', JSON.stringify(changes));
        }
        else {
            const isAlreadyLiked = (JSON.parse(localStorage.getItem('likedPics')).includes(pic));
            if (!isAlreadyLiked) {
                // TODO: change 'changes' name to a more reasonable name, and remove reseting action -->Done
                let changes = JSON.parse(localStorage.getItem('likedPics'));
                changes = [...changes, pic];
                localStorage.setItem('likedPics', JSON.stringify(changes));
            }
        }
    }

    const changePic = () => {
        setIsPicLoading(true);
        setIsClicked(!isClicked);
    }

    return (
        <div className="mainPicOpt">
            {/*TODO: put img in different lines for every prop --> done */}
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
            {/* TODO: use && instead of 'if' --> done */}
            <div className='mainPicDiv'>
                <img className={(isPicLoading ? 'hidden' : 'mainPic')} src={pic} alt="mainPic" onLoad={() => setIsPicLoading(false)} />
                <CircularProgress className={((!isPicLoading) ? 'hidden' : 'spinner')} />
            </div>

            <img className="sideButton" src={blackX} alt="nextPic" onClick={() => changePic()} />
            {/* TODO: remove {} --> done */}
        </div>
    )
}

export default SetPic;


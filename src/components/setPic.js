
//  this function will be a hook function
//  that updates the picture everytime it gets used


 import { useEffect, useState } from 'react';
 
 
 const SetPic = () => { 
      const [pic,setPicture] = useState();

      useEffect(()=>{
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => {
                setPicture(res.message);
            })
      })

      return (
          <div>
              <img id="mainPic" src={pic} alt="mainPic" />
          </div>
      )
  }
 
 export default SetPic;
 
 
 // find a way to intagrate the picture to the id of the mainPic always, even when you click a different button //
 // ^ for that, check in the Tic-Tac-Toe game //
 


//  this function will be a hook function
//  that updates the picture everytime it gets used


 import React , { setState } from 'react';
 
 const [pic,setPicture] = setState(0);
 
  const setPic = (props) =>{ 
      return (<img id="mainPic" src="random pic link" />)
  }
 
 export default setPic;
 
 
 // find a way to intagrate the picture to the id of the mainPic always, even when you click a different button //
 // ^ for that, check in the Tic-Tac-Toe game //
 

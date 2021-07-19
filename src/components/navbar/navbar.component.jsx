

import React, {useState, useEffect} from "react";

import "../navbar/_navbar.styles.scss";



const NavBar = () => {


    const [show, handleShow] = useState(false);
    

    const transitionNavBar = () => {
  
      if(window.scrollY > 100){
  
        handleShow(true);
  
      }else {
        handleShow(false);
      }
    }
  
    useEffect(() => {
      
      window.addEventListener("scroll", transitionNavBar);
  
      return () => window.removeEventListener("scroll", transitionNavBar);
      
    }, [])

    return (

        <div className= {`navBar ${show && `navBar_black`}`}>


            <div className="navContents">

            <img className="nav_logo" src="http://nativeadvertisinginstitute.com/wp-content/uploads/2015/03/Netflix_Logo_Digital-Video.png" alt="" />

            <img className="nav_avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />

            </div>
        
        </div>
    )
}

export default NavBar;
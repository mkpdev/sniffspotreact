import React from "react";
import IMAGES from "../res/Images";
import "./mainComponent.css";

export const HeaderComponent = (props) => {
return (
<div className="main-class">
<header className="nav-bar-class">
    <div className="nav-left-bar-class">
        <img style={{height:28,width:139}} className="logo-class" src={IMAGES.sniffspot_logo} alt="logo" />
        
        <div className="nav-main-menu">
 <a className="nav-left-bar-items">Our dog parks</a>
        </div>

        <div className="nav-main-menu">
 <a className="nav-left-bar-items">Blog</a>
        </div>

        <div className="nav-main-menu">
 <a className="nav-left-bar-items">Top dog trainers</a>
        </div>

        <div className="nav-main-menu">
 <a className="nav-left-bar-items">Become a host</a>
        </div>
        </div>

        <div className="nav-right-bar-class">
          <a>  <button className="sign-in-button">Sign in</button></a>

          <a>  <button className="join-free-button">Join for free!</button></a>
        </div>
</header>
</div>
);
}
import React from "react";
import "./index.module.css";
// import { StaticImage } from "gatsby-plugin-image";
import image from "../../images/logos/white_logo_transparent_background.png";
const Logo = () => {
  return (
    // <StaticImage
    //   className="logo-container"
    //   imgClassName="logo-img"
    //   src="../../images/logos/white_logo_transparent_background.png"
    //   alt="Logo"
    //   loading="eager"
    // />
    <div className="logoContainer">
      <img className="logo" src={image} alt="Logo"></img>
    </div>
  );
};

export default Logo;

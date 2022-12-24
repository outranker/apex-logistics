import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import image from "../../images/logos/dark_logo_white_background.jpg";
import image from "../../images/logos/dark_logo_transparent_background.png";
import styled from "styled-components";
const Logo = () => {
  return (
    // <StaticImage
    //   className="logo-container"
    //   imgClassName="logo-img"
    //   src="../../images/logos/white_logo_transparent_background.png"
    //   alt="Logo"
    //   loading="eager"
    // />
    <Container>
      <LogoImg src={image} alt="Logo" />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  outline: 1px solid green;
  grid-area: 1 / 1 / 2 / 2;
`;
const LogoImg = styled.img`
  width: 100%;
  display: inline-block;
`;

export default Logo;

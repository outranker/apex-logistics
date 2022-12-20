import React from "react";
import styled from "styled-components";
import Logo from "../Logo";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: grid;
`;
export default Header;

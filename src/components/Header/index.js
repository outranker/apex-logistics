import React from "react";
import styled from "styled-components";
import Logo from "../Logo";

const headerItems = [
  {
    name: "Services",
  },
  {
    name: "Contacts",
  },
  {
    name: "Contacts",
  },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <UnorderedList>
          {headerItems.map((item, index) => (
            <ListItem>{item.name}</ListItem>
          ))}
        </UnorderedList>
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  height: 5rem;
`;

const Nav = styled.nav`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
`;

const UnorderedList = styled.ul`
  list-style: none;
  margin: 1rem 2rem;
  display: flex;
`;

const ListItem = styled.li``;
export default Header;

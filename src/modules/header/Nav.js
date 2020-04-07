import React from "react";
import styled from "styled-components";
import { NAV_ITEMS } from "./constants";
import NavItem from "./NavItem";

function Nav() {
  return (
    <StyledContainer>
      <StyledList>
        {NAV_ITEMS.map(elem => {
          return <NavItem key={elem.id} linkTo={elem.to} text={elem.text} />;
        })}
      </StyledList>
    </StyledContainer>
  );
}

const StyledContainer = styled.nav`
  display: flex;
`;
const StyledList = styled.ul`
  display: flex;
`;

export default Nav;

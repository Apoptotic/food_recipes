import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function NavItem({ linkTo, text }) {
  return (
    <li>
      <StyledNavLink to={linkTo}>{text}</StyledNavLink>
    </li>
  );
}

// const StyledItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  color: #fff;
`;

export default NavItem;

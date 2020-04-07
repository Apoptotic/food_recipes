import React from "react";
import styled from "styled-components";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <StyledHeader>
      <StyledContainer container>
        <Grid item xs={12} lg={2}>
          <Logo />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Nav />
        </Grid>
        <Grid item xs={12} lg={1}>
          <PersonAddIcon />
          <ShoppingCartIcon />
        </Grid>
        <StyledSubmitRecipe item xs={12} lg={2}>
          <StyledButton variant="outlined" color="inherit">
            Submit Recipe
          </StyledButton>
        </StyledSubmitRecipe>
      </StyledContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #16262a;
  font-family: "Ubuntu", "sans-serif";
  color: #fff;
  height: 6rem;
`;

const StyledContainer = styled(Grid)`
  height: 100%;
`;

const StyledSubmitRecipe = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  border-radius: 30px;
  height: 50%;
  width: 60%;
  font-size: 18px;
  &:hover {
    background-color: #fff;
    color: #538f2e;
    transition: background-color 0.2s linear, color 1s linear;
  }
`;

export default Header;

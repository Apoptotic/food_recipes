import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <StyledContainer>
      <a href="/">
        <img src="./img/logo.png" alt="logo" />
      </a>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 75%;
  padding: 0 0 0 1rem;
`;

export default Logo;

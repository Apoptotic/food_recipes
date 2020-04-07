import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function A() {
  return <Button variant="outlined">Default</Button>;
}

const StyledContainer = styled.header`
  background-color: #16262a;
  font-family: "Ubuntu", "sans-serif";
  color: #fff;
`;

export default A;

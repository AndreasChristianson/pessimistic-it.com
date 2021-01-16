import styled from "styled-components";
import React from "react";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const Centered = (props) =>
  <Container>
      {props.children}
  </Container>

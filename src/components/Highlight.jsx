import styled from "styled-components";
import React from "react";
import { transparency } from "../constants/colors";
import { Centered } from "./Center";

const Highlight = styled.header`
  background-color: ${({color}) => color+transparency};
  padding: 1rem;
  margin: 2rem;
  border-radius: 1rem;
`;

export const HighlightedSection = (props) =>
  <Centered>
    <Highlight {...props}>
      {props.children}
    </Highlight>
  </Centered>

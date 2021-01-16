import styled from "styled-components";
import React from "react";
import { openSans } from "../constants/fonts";

export const textStyle = `
  font-family: ${openSans};
  font-size: 1rem;
`;

export const Text = styled.div`
  ${textStyle}
`;

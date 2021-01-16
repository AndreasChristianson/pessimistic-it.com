import React from "react";
import styled from "styled-components";
import { Text, textStyle } from "../../components/Text";
import { openSans } from "../../constants/fonts";

const ListItem = styled.li`
  ${textStyle}
  /* list-style-type: none; */
  /* list-style-position: inside; */
  color: ${({ color }) => color};
`;

export const Bullet = ({ url, text, textColor }) => (
  <ListItem color={textColor}>{text}</ListItem>
);

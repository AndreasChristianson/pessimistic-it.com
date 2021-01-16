import React from "react";
import styled from "styled-components";
import { Bullet } from "./Bullet";

const List = styled.ul`
  text-align: start;
  padding-left: 1em;
`;


export const Bullets = ({ bullets, textColor }) => (
  <List>
      {bullets.map((bullet) => (
        <Bullet
          textColor={textColor}
          key={bullet.text}
          text={bullet.text}
          url={bullet.url}
        />
      ))}
  </List>
);

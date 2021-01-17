import React from 'react'
import styled from 'styled-components'
import { Bullet } from './Bullet'

const List = styled.ul`
  text-align: start;
  padding-left: 1em;
`

export const Bullets = ({ bullets, textColor }) => (
  <List>
    {bullets.map((bullet, index) => (
      <Bullet
        {...bullet}
        // textColor={textColor}
        key={index}
        // markdown={bullet.markdown}
        // url={bullet.url}
      />
    ))}
  </List>
)

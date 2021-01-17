import React from 'react'
import styled from 'styled-components'
import { textStyle } from '../../components/Text'
import ReactMarkdown from 'react-markdown'

const ListItem = styled.li`
  ${textStyle}
  color: ${({ color }) => color};
`

export const Bullet = ({ markdown, textColor }) => (
  <ListItem color={textColor}>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </ListItem>
)

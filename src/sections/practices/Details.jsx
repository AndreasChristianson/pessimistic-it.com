import React from 'react'
import styled from 'styled-components'
import { Practice } from './Practice'
import { practices } from '../content'
import { mobileModeWidth } from '../../constants/measurements'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: ${mobileModeWidth}px) {
    flex-direction: column;
  }
`

export const DetailsSection = (props) => (
  <Container>
    {practices.map((practice) => (
      <Practice key={practice.title} {...practice} />
    ))}
  </Container>
)

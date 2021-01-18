import React from 'react'
import styled from 'styled-components'
import cornField from '../images/title-background.jpeg'
import { HighlightedSection } from '../components/Highlight'
import { SectionBackground } from '../components/SectionBackground'
import { fieldCorn, fieldSky } from '../constants/colors'
import { Text } from '../components/Text'

const Heading = styled(Text)`
  font-size: 3rem;
  font-weight: bold;
  color: ${fieldCorn};
  text-shadow: ${fieldSky} 0px 0px 2px;
`

const Tagline = styled(Text)`
  color: ${fieldCorn};
`

const FieldOfDreams = styled(SectionBackground)`
  background-image: url(${cornField});
  height: 100vh;
  max-height: 500px;
  min-height: 300px;
  background-position: center;
  margin-bottom: 2rem;
  border-radius: 0 0 2rem 2rem;
`

const TitleHolder = styled(HighlightedSection)`
  padding: 4rem 2rem;
`

export const TitleSection = (props) => (
  <>
    <FieldOfDreams>
      <TitleHolder color={fieldSky}>
        <Heading>{'Pessimistic IT'}</Heading>
        <Tagline>{'Concentrate on what matters.'}</Tagline>
      </TitleHolder>
    </FieldOfDreams>
  </>
)

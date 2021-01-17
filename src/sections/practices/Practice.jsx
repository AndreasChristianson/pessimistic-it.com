import React from 'react'
import styled from 'styled-components'
import { HighlightedSection } from '../../components/Highlight'
import { SectionBackground } from '../../components/SectionBackground'
import { Text } from '../../components/Text'
import { mobileModeWidth } from '../../constants/measurements'
import { Bullets } from './Bullets'

const Heading = styled(Text)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ textColor }) => textColor};
  text-shadow: ${({ shadowColor }) => shadowColor} 0px 0px 2px;
  margin-bottom: 0.25rem;
  margin-top: -0.25rem;
`

const Image = styled(SectionBackground)`
  background-image: url(${(props) => props.image});
  min-height: max(40vh, 400px);
  @media (min-width: ${mobileModeWidth}px) {
    min-width: 400px;
  }
  flex: 1 1 0;
`

export const Practice = ({ image, title, bullets, lightColor, darkColor }) => (
  <Image image={image}>
    <HighlightedSection color={lightColor}>
      <Heading textColor={darkColor} shadowColor={lightColor}>
        {title}
      </Heading>
      <Bullets textColor={darkColor} bullets={bullets} />
    </HighlightedSection>
  </Image>
)

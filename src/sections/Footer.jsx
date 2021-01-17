import React from 'react'
import styled from 'styled-components'
import { Link } from '../components/Link'
import { SectionBackground } from '../components/SectionBackground'
import { fieldCorn } from '../constants/colors'
import cornField from '../images/title-background.png'
import { footerLinks } from './content'

const Background = styled(SectionBackground)`
  background-image: url(${cornField});
  background-position: bottom;
  margin-top: 2rem;
  border-radius: 2rem 2rem 0 0;
  justify-content: space-around;
  color: ${fieldCorn};
`

const FooterLink = styled(Link)`
  margin: 1rem;
`

export const Footer = (props) => (
  <Background>
    {footerLinks.map(({ text, url }, index) => (
      <FooterLink href={url} key={index}>
        {text}
      </FooterLink>
    ))}
  </Background>
)

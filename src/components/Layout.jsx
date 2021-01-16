import React from 'react'
import styled from 'styled-components'
import { bodyWidth } from '../constants/measurements'
import { Centered } from './Center'

const FixedWidth = styled.div`
    width: 100%;
    max-width: ${bodyWidth}px;
    min-width: 280px;
`

export const Layout = ({ children }) => (
    <Centered>
        <FixedWidth>{children}</FixedWidth>
    </Centered>
)

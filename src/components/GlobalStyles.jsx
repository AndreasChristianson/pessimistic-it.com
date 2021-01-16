import {createGlobalStyle} from 'styled-components'
import { boltDark, fieldSky, fieldCorn } from '../constants/colors'
import { mobileModeWidth } from '../constants/measurements'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  background: ${fieldSky};
  @media (prefers-color-scheme: dark) {
    background:  ${boltDark};
  }
}


html {
  font-size: 16px;
    @media (max-width: ${mobileModeWidth}px) {
      font-size: 12px;
  }
}

`
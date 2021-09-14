import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    /* font-family: 'KoHo', sans-serif; */
    font-family: 'Open Sans', sans-serif;
  }
`
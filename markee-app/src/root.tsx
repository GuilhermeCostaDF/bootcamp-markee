import { App } from './app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from 'resources/theme'

import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }
  
  body{
    font-family: 'DM Sans', sans-serif;
  }

  h1{
    font-size: 1rem;
  }
`

export { Root }

import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #e6e6e6;
  }
`

const theme = {
  colors: {
    primary: '#003085',
    secondary: '#e6e6e6'
  },
  fonts: {
    primary: 'Anton, sans-serif',
    secondary: 'Lato, sans-serif'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
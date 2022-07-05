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
    background-color: #f0f0ff;
  }

  body::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }

  body::-webkit-scrollbar-track {
    background-color: #adbaca;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #15384e;
  }
`

const theme = {
  colors: {
    primary: '#15384e',
    secondary: '#f0f0ff',
    tertiary: '#adbaca',
  },
  fonts: {
    primary: 'Anton, sans-serif',
    secondary: 'Lato, sans-serif',
  },
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

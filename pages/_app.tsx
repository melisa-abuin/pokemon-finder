import { ApolloProvider } from '@apollo/client'
import { client } from '../client'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/globals.css'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App

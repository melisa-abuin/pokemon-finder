import { ApolloProvider } from '@apollo/client'
import { client } from '../client'
import { ThemeProvider } from "styled-components"
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
}

export default MyApp

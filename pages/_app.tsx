import { ApolloProvider } from '@apollo/client'
import { client } from '../client'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemon Finder</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="description" content="Search for pokemon by name" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://pokemon-finder-xi.vercel.app/"
        />
        <meta property="og:title" content="Pokemon finder" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:description" content="Search for pokemon by name" />
        <meta property="og:site_name" content="pokemon finder" />
        <meta property="og:locale" content="en_US" />

        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="canonical" href="https://pokemon-finder-xi/" />

        <noscript>You need to enable JavaScript to run this app.</noscript>
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </main>
    </>
  )
}

export default App

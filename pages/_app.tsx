import { ApolloProvider } from '@apollo/client'
import { client } from '../client'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { getActiveTheme } from '@/utils/getActiveTheme'
import { CustomThemeProvider } from '@/context/CustomThemeProvider'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  const activeTheme = getActiveTheme()

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

      <main className={inter.className}>
        <CustomThemeProvider activeTheme={activeTheme}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </CustomThemeProvider>
      </main>
    </>
  )
}

export default App

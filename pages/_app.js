import { ApolloProvider } from '@apollo/client'
import { client } from '../client'
import { ThemeProvider } from "styled-components"
import theme from '../theme'
import Head from 'next/head'
import '../styles/globals.css'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import commonEn from "../translations/en/common.json"

i18next.init({
  interpolation: { escapeValue: false },  
  lng: 'en',                              
  resources: {
    en: {
        common: commonEn               
    }
  },
})

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
          <Head>
            <title>Pokemon Finder</title>
            <meta property="og:site_name" content='Pokemon Finder' />
            <meta property='og:title' content='Pokemon Finder' key='title' />
            <meta property='og:description' content='Find all the pokemon you want' key='description' />
          </Head>
          <I18nextProvider i18n={i18next}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </I18nextProvider>
        </ThemeProvider>
}

export default MyApp

import { PageWrapper } from 'components'
import { CharacterProvider } from 'contexts'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, defaultTheme } from 'theme'
import 'react-loading-skeleton/dist/skeleton.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CharacterProvider>
        <PageWrapper>
          <GlobalStyle />
          <Head>
            <title>Marvel Characters</title>
          </Head>
          <Component {...pageProps} />
        </PageWrapper>
      </CharacterProvider>
    </ThemeProvider>
  )
}

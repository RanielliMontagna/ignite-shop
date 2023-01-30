import type { AppProps } from 'next/app'

import { Roboto } from '@next/font/google'
import { globalStyles } from '@/styles/global'

import { Header } from '@/components/header/header'
import { Container } from '@/styles/pages/app'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}

import type { AppProps } from 'next/app'

import { Roboto } from '@next/font/google'
import { globalStyles } from '@/styles/global'

import { Header } from '@/components/header/header'
import { Container } from '@/styles/pages/app'
import { CartProvider } from '@/context/cardContext'
import { Cart } from '@/components/cart/cart'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <CartProvider>
        <Cart />
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}

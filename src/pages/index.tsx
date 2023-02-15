import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { Handbag } from 'phosphor-react'

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { stripe } from '@/lib/stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { CartButton, HomeContainer, Product } from '@/styles/pages/home'
import { IProduct, useCart } from '@/context/cardContext'
import { formatToBrl } from '@/utils/formatToBrl'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const cart = useCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const _product = cart.products.find((p) => p.id === product.id)

          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={520}
                  height={480}
                />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{formatToBrl(product.price)}</span>
                  </div>
                  <div>
                    <CartButton
                      onClick={(e) => {
                        cart.handleAddProduct(product)
                        e.preventDefault()
                      }}
                      disabled={!!_product}
                      style={{
                        opacity: _product ? 0.5 : 1,
                        cursor: _product ? 'not-allowed' : 'pointer',
                      }}
                    >
                      <Handbag size={24} weight="bold" />
                    </CartButton>
                  </div>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount || 0) / 100,
      priceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}

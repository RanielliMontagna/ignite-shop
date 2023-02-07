import Image from 'next/image'
import { Handbag } from 'phosphor-react'

import logoImg from '@/assets/logo.svg'
import { CartButton, HeaderContainer } from '@/styles/components/header'
import { useCart } from '@/context/cardContext'

export function Header() {
  const { handleOpenCart, products } = useCart()

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo Ignite Shop" />
      <CartButton
        onClick={handleOpenCart}
        css={{
          '&:after': {
            content: `"${products?.length}"`,
            visibility: products?.length > 0 ? 'visible' : 'hidden',
          },
        }}
      >
        <Handbag size={24} weight="bold" />
      </CartButton>
    </HeaderContainer>
  )
}

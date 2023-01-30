import Image from 'next/image'
import { Handbag } from 'phosphor-react'

import logoImg from '@/assets/logo.svg'
import { CartButton, HeaderContainer } from '@/styles/components/header'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo Ignite Shop" />
      <CartButton>
        <Handbag size={24} weight="bold" />
      </CartButton>
    </HeaderContainer>
  )
}

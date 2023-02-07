import { useCart } from '@/context/cardContext'
import {
  CartButton,
  CartContainer,
  CartItems,
  CartSummary,
  Overlay,
  Title,
} from '@/styles/components/cart'

export function Cart() {
  const { openCart, handleCloseCart } = useCart()

  return (
    <>
      <Overlay
        css={{ display: openCart ? 'flex' : 'none' }}
        onClick={handleCloseCart}
      />
      <CartContainer
        css={{
          transform: openCart ? 'translateX(0)' : 'translateX(100%)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Title>Sacola de compras</Title>
        <CartItems>em construção...</CartItems>
        <div>
          <CartSummary>
            <div>
              <p>Quantidade</p>
              <p>3 itens</p>
            </div>
            <div>
              <p>
                <strong>Valor total</strong>
              </p>
              <p>
                <strong>R$ 1.000,00</strong>
              </p>
            </div>
          </CartSummary>
        </div>
        <CartButton>Finalizar compra</CartButton>
      </CartContainer>
    </>
  )
}

import {
  CartContainer,
  CartItems,
  CartSummary,
  Title,
} from '@/styles/components/cart'

export function Cart() {
  return (
    <CartContainer>
      <Title>Sacola de compras</Title>
      <CartItems>produtos</CartItems>
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
        <button>Finalizar compra</button>
      </div>
    </CartContainer>
  )
}

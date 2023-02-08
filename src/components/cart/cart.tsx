import { useCart } from '@/context/cardContext'
import {
  CartButton,
  CartCloseButton,
  CartContainer,
  CartItems,
  CartProduct,
  CartSummary,
  EmptyProductsContainer,
  Overlay,
  Title,
} from '@/styles/components/cart'
import { formatToBrl } from '@/utils/formatToBrl'
import Image from 'next/image'
import { X } from 'phosphor-react'

export function Cart() {
  const { products, openCart, handleCloseCart, handleRemoveProduct } = useCart()

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
        <CartCloseButton onClick={handleCloseCart}>
          <X size={18} weight="bold" />
        </CartCloseButton>
        <Title>Sacola de compras</Title>
        {products.length === 0 ? (
          <EmptyProductsContainer>
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione produtos para continuar</p>
          </EmptyProductsContainer>
        ) : (
          <CartItems>
            {products?.map((product) => (
              <CartProduct key={product.id}>
                <div className="divImage">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={95}
                    height={95}
                  />
                </div>
                <div className="divInfo">
                  <div>
                    <p>{product.name}</p>
                    <p>{formatToBrl(product.price)}</p>
                  </div>
                  <div>
                    <button
                      className="buttonRemove"
                      onClick={() => {
                        handleRemoveProduct(product.id)
                      }}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </CartProduct>
            ))}
          </CartItems>
        )}
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

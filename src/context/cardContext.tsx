import { createContext, useContext, useState } from 'react'

interface Product {}
interface CartContextData {
  openCart: boolean
  products: Product[]

  handleAddProduct: (product: Product) => void
  handleRemoveProduct: (productId: number) => void

  handleOpenCart: () => void
  handleCloseCart: () => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextData)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [openCart, setOpenCart] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  const handleOpenCart = () => {
    setOpenCart(true)
  }

  const handleCloseCart = () => {
    setOpenCart(false)
  }

  const handleAddProduct = (product: Product) => {
    setProducts((values) => [...values, product])
  }

  const handleRemoveProduct = (productId: number) => {}

  return (
    <CartContext.Provider
      value={{
        openCart,
        products,
        handleOpenCart,
        handleCloseCart,
        handleAddProduct,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

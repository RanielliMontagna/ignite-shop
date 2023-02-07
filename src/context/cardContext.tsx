import { createContext, useContext, useState } from 'react'

interface CartContextData {
  openCart: boolean
  products: {}

  handleOpenCart: () => void
  handleCloseCart: () => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextData)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [openCart, setOpenCart] = useState(false)
  const [products, setProducts] = useState({})

  const handleOpenCart = () => {
    setOpenCart(true)
  }

  const handleCloseCart = () => {
    setOpenCart(false)
  }

  return (
    <CartContext.Provider
      value={{
        openCart,
        products,
        handleOpenCart,
        handleCloseCart,
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

import { createContext, useContext, useState } from 'react'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: number
}
interface CartContextData {
  openCart: boolean
  products: IProduct[]

  handleAddProduct: (product: IProduct) => void
  handleRemoveProduct: (productId: string) => void

  handleOpenCart: () => void
  handleCloseCart: () => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextData)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [openCart, setOpenCart] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])

  const handleOpenCart = () => {
    setOpenCart(true)
  }

  const handleCloseCart = () => {
    setOpenCart(false)
  }

  const handleAddProduct = (product: IProduct) => {
    setProducts((values) => [...values, product])
  }

  const handleRemoveProduct = (productId: string) => {
    setProducts((values) =>
      values.filter((product) => product.id !== productId),
    )
  }

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

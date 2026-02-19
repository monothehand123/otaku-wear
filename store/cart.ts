import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  sizes: string[]
  description: string
}

interface CartItem extends Product {
  quantity: number
  selectedSize: string
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, size: string) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, size: string) => {
        const items = get().items
        const existingItem = items.find(
          item => item.id === product.id && item.selectedSize === size
        )

        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            isOpen: true
          })
        } else {
          set({
            items: [...items, { ...product, quantity: 1, selectedSize: size }],
            isOpen: true
          })
        }
      },

      removeItem: (id: string, size: string) => {
        set({
          items: get().items.filter(
            item => !(item.id === id && item.selectedSize === size)
          )
        })
      },

      updateQuantity: (id: string, size: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id, size)
          return
        }
        set({
          items: get().items.map(item =>
            item.id === id && item.selectedSize === size
              ? { ...item, quantity }
              : item
          )
        })
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      }
    }),
    {
      name: 'otaku-wear-cart'
    }
  )
)

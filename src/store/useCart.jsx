import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productID) =>
        set((state) => ({
          ...state,
          cart: state.cart.filter((cart) => cart.id !== productID),
        })),
      increaseQuantity: (productID) =>
        set((state) => ({
          ...state,
          cart: state.cart.map((item) =>
            item.id === productID
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decreaseQuantity: (productID) =>
        set((state) => ({
          ...state,
          cart: state.cart.map((item) =>
            item.id === productID
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),
      updateQuantity: (productID, quantity) =>
        set((state) => ({
          ...state,
          cart: state.cart.map((item) =>
            item.id === productID ? { ...item, quantity: quantity } : item
          ),
        })),
    }),
    { name: "cart-storage" }
  )
);

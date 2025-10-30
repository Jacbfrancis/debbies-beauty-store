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
    }),
    { name: "cart-storage" }
  )
);

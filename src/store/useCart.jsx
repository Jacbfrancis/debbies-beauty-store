import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productID) =>
    set((state) => ({
      ...state,
      cart: state.cart.filter((cart) => cart.id !== productID),
    })),
}));

import { create } from "zustand";

export const useCartMenu = create((set) => ({
  isCartMenuOpen: false,
  openCartMenu: () => set((state) => ({ ...state, isCartMenuOpen: true })),
  closeCartMenu: () => set((state) => ({ ...state, isCartMenuOpen: false })),
}));

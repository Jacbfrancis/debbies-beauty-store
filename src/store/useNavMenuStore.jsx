import { create } from "zustand";

export const useNavMenu = create((set) => ({
  isNavMenuOpen: false,
  openNavMenu: () => set((state) => ({ ...state, isNavMenuOpen: true })),
  closeNavMenu: () => set((state) => ({ ...state, isNavMenuOpen: false })),
}));

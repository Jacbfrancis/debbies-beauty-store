import { create } from "zustand";

export const useAdminNavMenuStore = create((set) => ({
  isAdminNavMenuOpen: false,

  openIsAdminNavMenu: (isAdminNavMenuOpen) => set({ isAdminNavMenuOpen }),
  closeIsAdminMenu: (isAdminNavMenuOpen) => set({ isAdminNavMenuOpen }),
}));

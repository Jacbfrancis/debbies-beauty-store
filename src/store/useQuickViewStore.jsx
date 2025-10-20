import { create } from "zustand";

export const useQuickView = create((set) => ({
  isQuickViewOpen: false,
  openQuickView: () => set((state) => ({ ...state, isQuickViewOpen: true })),
  closeQuickView: () => set((state) => ({ ...state, isQuickViewOpen: false })),
}));

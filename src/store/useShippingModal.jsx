import { create } from "zustand";

export const useShippingModal = create((set) => ({
  isShippingModalOpen: false,
  openShippingModal: () =>
    set((state) => ({ ...state, isShippingModalOpen: true })),
  closeShippingModal: () =>
    set((state) => ({ ...state, isShippingModalOpen: false })),
}));

import { create } from "zustand";

export const useLogoutModal = create((set) => ({
  isLogoutModal: false,
  openLogoutModal: () => set((state) => ({ ...state, isLogoutModal: true })),
  closeLogoutModal: () => set((state) => ({ ...state, isLogoutModal: false })),
}));

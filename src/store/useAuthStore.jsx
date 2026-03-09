import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authLoading: true,
  user: null,

  setUser: (user) => set({ user }),
  setAuthLoading: (authLoading) => set({ authLoading }),
}));

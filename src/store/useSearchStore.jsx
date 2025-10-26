import { create } from "zustand";

export const useSearchQuery = create((set) => ({
  searchQuery: "",
  setSearchQuery: (searchQuery) =>
    set((state) => ({ ...state, searchQuery: searchQuery })),
}));

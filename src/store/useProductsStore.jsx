import { create } from "zustand";

export const useProducts = create((set) => ({
  products: null,
  productsLoading: true,
  productsError: null,

  setProducts: (products) => set({ products }),
  setProductsLoading: (productsLoading) => set({ productsLoading }),
  setProductsError: (productsError) => set({ productsError }),
}));

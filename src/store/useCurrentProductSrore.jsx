import { create } from "zustand";
import { products } from "../ProductsArray";

export const useCurrentProduct = create((set) => ({
  currentProduct: null,

  setCurrentProduct: (productID) =>
    set((state) => ({
      ...state,
      currentProduct: products.find((product) => product.id == productID),
    })),

  clearCurrentProduct: () =>
    set((state) => ({ ...state, currentProduct: null })),
}));

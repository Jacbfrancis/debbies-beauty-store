import { create } from "zustand";
import { products } from "../ProductsArray";

export const useProductCategory = create(() => ({
  makeup: products.filter((product) => product.category === "Makeup"),
}));

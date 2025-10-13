import { create } from "zustand";
import { products } from "../ProductsArray";

export const useProductCategory = create(() => ({
  makeup: products.filter((product) => product.category === "Makeup"),
  skincare: products.filter((product) => product.category === "Skincare"),
  haircare: products.filter((product) => product.category === "Haircare"),
}));

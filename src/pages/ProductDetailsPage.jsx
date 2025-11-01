import ProductDetails from "../components/ProductDetails";
import SuggestProducts from "../components/SuggestProducts";
import CustomerAssurance from "../components/CustomerAssurance";
import { useState } from "react";

function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ProductDetails quantity={quantity} setQuantity={setQuantity} />
      <SuggestProducts setQuantity={setQuantity} />
      <CustomerAssurance />
    </>
  );
}

export default ProductDetailsPage;

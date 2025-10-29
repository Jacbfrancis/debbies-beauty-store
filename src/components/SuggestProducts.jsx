import { useParams } from "react-router-dom";
import { products } from "../ProductsArray";

function SuggestProducts() {
  const { slug } = useParams();
  const currentProduct = products.find((product) => slug === product.slug);

  console.log(currentProduct);

  return <div></div>;
}

export default SuggestProducts;

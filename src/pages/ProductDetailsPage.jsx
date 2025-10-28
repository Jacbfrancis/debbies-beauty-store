import { useParams } from "react-router-dom";
import { products } from "../ProductsArray";

function ProductDetailsPage() {
  const { slug } = useParams();

  const currentProduct = products.find((product) => product.slug === slug);

  return (
    <div>
      <p>{currentProduct.productName}</p>
    </div>
  );
}

export default ProductDetailsPage;

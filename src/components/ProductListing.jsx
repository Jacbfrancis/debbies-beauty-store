import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../ProductsArray";
import ProductCard from "./ProductCard";

function ProductListing() {
  const { category } = useParams();

  const [currentIndex, setCurrentIndex] = useState(null);

  const productCategory = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="grid grid-cols-2 gap-10 mt-15 px-6 lg:px-20 md:grid-cols-4">
      {productCategory.map((product, index) => (
        <div
          key={product.id}
          className="text-center cursor-pointer"
          onMouseOver={() => setCurrentIndex(index)}
          onMouseOut={() => setCurrentIndex(null)}
        >
          <ProductCard
            product={product}
            currentIndex={currentIndex}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductListing;

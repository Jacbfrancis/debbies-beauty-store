import { useParams } from "react-router-dom";
import { products } from "../ProductsArray";
import CategoryCard from "./CategoryCard";

function SuggestProducts({ setQuantity }) {
  const { slug } = useParams();
  const currentProduct = products.find((product) => slug === product.slug);
  const similarProducts = products.filter(
    (product) => product.category === currentProduct.category
  );

  return (
    <div className="mt-20 mb-10 px-6 lg:px-20 lg:mt-35">
      <h2 className="text-[1.5rem] text-center font-semibold my-5">
        Related Products
      </h2>
      <div className="overflow-x-scroll [scrollbar-width:none] whitespace-nowrap">
        <div className="flex justify-start items-start gap-4 snap-x">
          {similarProducts.slice(0, 5).map((product, index) => (
            <div key={index} className="snap-center">
              <CategoryCard product={product} setQuantity={setQuantity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestProducts;

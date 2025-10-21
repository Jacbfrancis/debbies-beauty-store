import { useState } from "react";
import CategoryCard from "./CategoryCard";
import { products } from "../ProductsArray";

function BestSelling() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const active = true;

  return (
    <div className="mt-10 px-6 xl:px-20">
      <h1 className="text-center text-[1.8rem] mt-8 mb-10 lg:text-[2.2rem]">
        Hot Selling Products
      </h1>

      <div className="overflow-x-scroll [scrollbar-width:none] whitespace-nowrap">
        <div className="flex justify-start items-start gap-4 snap-x">
          {products.slice(0, 5).map((product, index) => (
            <div
              key={index}
              onMouseOver={() => setCurrentIndex(index)}
              onMouseLeave={() => setCurrentIndex(null)}
              className="snap-center"
            >
              <CategoryCard
                productName={product.productName}
                productPrice={product.price}
                productImage={product.productImage}
                productID={product.id}
                currentIndex={currentIndex}
                active={currentIndex === index && active}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSelling;

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../ProductsArray";

function BestSelling() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const active = true;

  return (
    <div className="mt-10 pb-90 px-6 xl:px-20">
      <h1 className="text-center text-[2.2rem] mt-8">Hot Selling Products</h1>
      <div className="flex justify-end items-center mb-8">
        <span className="text-center font-semibold block w-[5.5rem] border-1 rounded-4xl px-3 py-1 hover:bg-black hover:text-white">
          View all
        </span>
      </div>
      <div className="overflow-scroll [scrollbar-width:none] whitespace-nowrap">
        <div className="flex justify-start items-start gap-4">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={index}
              onMouseOver={() => setCurrentIndex(index)}
              onMouseLeave={() => setCurrentIndex(null)}
            >
              <ProductCard
                productName={product.productName}
                productPrice={product.originalPrice}
                productImage={product.productImage}
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

import { useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchQuery } from "../store/useSearchStore";
import { products } from "../ProductsArray";

function SearchResults() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const searchQuery = useSearchQuery((state) => state.searchQuery);

  const searchResults = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return searchResults.length < 1 || searchResults.length === 0 ? (
    <div className="text-center px-12 lg:px-20">
      <span className="w-[30%] mx-auto mt-10 block lg:w-[20%]">
        <img
          className="w-full"
          src="/images/empty_result.png"
          alt="product_not_found"
        />
      </span>
      <p>
        No results found for {searchQuery}. Check the spelling or use a
        different word or phrase.
      </p>
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-10 mt-15 px-6 lg:px-20 lg:grid-cols-3 xl:grid-cols-4">
      {searchResults.map((product, index) => (
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

export default SearchResults;

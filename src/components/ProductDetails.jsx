import { useParams } from "react-router-dom";
import { products } from "../ProductsArray";

function ProductDetails() {
  const { slug } = useParams();
  const currentProduct = products.find((product) => product.slug === slug);

  return (
    <div className="px-6 lg:px-20">
      <div className="flex flex-col justify-center items-start my-10 lg:flex-row lg:gap-10">
        <span className="bg-[#f0f0f0] w-full p-12 block">
          <img
            className="m-auto w-full lg:w-[70%]"
            src={currentProduct.productImage}
            alt={currentProduct.productName}
          />
        </span>

        <div className="text-left mt-10">
          <span className="block">
            <h1 className="text-[1.5rem] mb-2">{currentProduct.productName}</h1>
            <p className="text-[1.3rem] mb-5">₦ {currentProduct.price}</p>
            <p className="text-slate-600">{currentProduct.description}</p>
          </span>
          <div className="block mt-5">
            <p className="text-slate-600 text-[0.85rem] font-normal mb-1.5">
              Quantity
            </p>
            <span className="text-[#000] font-bold w-[35%] flex justify-between items-center border-[#000] border-1 rounded-md py-1.5 px-2.5 lg:w-[25%]">
              <button className="cursor-pointer">-</button>
              <input
                className="text-[#000] text-center font-normal w-[4rem] focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                defaultValue={0}
              />
              <button className="cursor-pointer">+</button>
            </span>
            <div className="mt-5 lg:flex flex-row-reverse justify-between items-center gap-4">
              <button className="bg-[#e94a6d] text-[#fff] w-full px-5 py-3.5 rounded-md border-1 my-2">
                Add to Cart
              </button>
              <button className="bg-[#fff] text-[#000] w-full px-5 py-3.5 rounded-md border-1 my-2 hover:border-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

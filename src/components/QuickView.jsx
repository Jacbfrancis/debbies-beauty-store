import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../store/useCart";
import { useCurrentProduct } from "../store/useCurrentProductSrore";
import { useQuickView } from "../store/useQuickViewStore";
import { useState } from "react";

function QuickView() {
  const [quantity, setQuantity] = useState(1);

  const currentProduct = useCurrentProduct((state) => state.currentProduct);
  const closeQuickView = useQuickView((state) => state.closeQuickView);
  const clearCurrentProduct = useCurrentProduct(
    (state) => state.clearCurrentProduct
  );
  const cart = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);

  const currentItem = { ...currentProduct, quantity };

  function handleAddToCart(currentItem) {
    const productExist = cart.some(
      (cartItem) => cartItem.id === currentProduct.id
    );

    if (!productExist) {
      addToCart(currentItem);
      toast.success("Successfully added to cart", {
        position: "top-right",
        duration: 1000,
      });
    } else {
      toast("Product is already in cart", {
        duration: 1000,
        position: "top-right",
        icon: "😅",
      });
    }
  }

  function handleCloseQuickView() {
    closeQuickView();
    clearCurrentProduct();
  }

  return (
    <div
      className="bg-[#000000a3] h-[100vh] w-full absolute top-0 m-auto flex-col justify-center items-center hidden z-50 lg:flex"
      onClick={handleCloseQuickView}
    >
      <Toaster />
      <div
        className="bg-[#fff] w-[80%] rounded-xl p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-2">
          <span>
            <h4 className="text-[1.3rem] font-medium">
              {currentProduct.productName}
            </h4>
          </span>
          <span
            className="hover:bg-[#000] hover:text-white hover:rounded-full p-1 cursor-pointer"
            onClick={handleCloseQuickView}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </div>
        <hr className="border-[#f6d0d8]" />
        <div className="flex justify-start items-start mt-10 gap-5">
          <span className="w-[30%] h-[20rem] border-[#f6d0d8] rounded-xl border-1 block p-3">
            <img
              src={currentProduct.productImage}
              alt={currentProduct.productName}
            />
          </span>
          <div className="w-[70%] h-[20rem] border-[#f6d0d8] rounded-xl border-1 px-10 py-5">
            <h2 className="text-[1.3rem] font-semibold mb-4">
              {currentProduct.productName}
            </h2>
            <h2 className="text-[#e94a6d] text-[1.4rem] font-bold">
              ₦{currentProduct.price}
            </h2>
            <div className="flex justify-start items-center my-6 gap-4">
              <p className="text-[1.2rem] font-semibold">Quantity: </p>
              <span className="text-[#e94a6d] font-bold border-[#e94a6d] border-1 rounded-md py-1.5 px-2.5">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((prev) => prev - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  className="text-[#000] text-center font-normal w-[4rem] focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const value =
                      inputValue === "" || inputValue < 1
                        ? 1
                        : Number(inputValue);
                    setQuantity(value);
                  }}
                  value={quantity}
                />
                <button
                  className="cursor-pointer"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </span>
            </div>
            <p className="text-[1.2rem] font-semibold">
              Total Price:{" "}
              <span className="text-[#e94a6d] text-[1.2rem]">
                ₦{currentProduct.price * 200}
              </span>
            </p>

            <div className="flex justify-start items-center gap-5 mt-7">
              <button
                className="bg-[#e94a6d] text-[#fff] rounded-md px-5 py-3 cursor-pointer"
                onClick={() => handleAddToCart(currentItem)}
              >
                Quick Cart
              </button>
              <button className="bg-[#0b0b90] text-[#fff] rounded-md px-5 py-3 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;

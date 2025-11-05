// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import toast, { Toaster } from "react-hot-toast";
import { useQuickView } from "../store/useQuickViewStore";
import { useCurrentProduct } from "../store/useCurrentProductSrore";
import { useCart } from "../store/useCart";
import { Link } from "react-router-dom";

function ProductCard({ product, currentIndex, index }) {
  const setCurrentProduct = useCurrentProduct(
    (state) => state.setCurrentProduct
  );
  const openQuickView = useQuickView((state) => state.openQuickView);
  const cart = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);

  const currentItem = { ...product, quantity: 1 };

  function handleAddToCart(currentItem) {
    const productExist = cart.some((cartItem) => product.id === cartItem.id);

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
  return (
    <>
      <Toaster />
      <div className="bg-[#f0f0f0] py-5 px-3 lg:[19rem] rounded-xl">
        <div className="flex justify-end items-center">
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={
              currentIndex === index
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 10 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#e94a6d] shadow-md text-[#fff] w-[2rem] rounded-md justify-center items-center py-1.5 px-1.5 hidden lg:flex"
            onClick={() => {
              setCurrentProduct(product.id);
              openQuickView();
            }}
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
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </motion.span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <span className="p-4 lg:p-8 block">
            <motion.img
              initial={{ scale: 1 }}
              animate={currentIndex === index ? { scale: 1.15 } : { scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              src={product.productImage}
              alt={product.productName}
            />
          </span>
        </Link>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={
            currentIndex === index
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#e94a6d] text-[#fff] shadow-md w-[90%] rounded-md m-auto py-2.5 lg:hover:bg-[#f4335d] cursor-pointer hidden lg:block"
          onClick={() => handleAddToCart(currentItem)}
        >
          QuickCart
        </motion.button>
        <button
          className="bg-[#e94a6d] text-[#fff] shadow-md w-[90%] rounded-md m-auto py-1.5 cursor-pointer lg:hidden"
          onClick={() => handleAddToCart(currentItem)}
        >
          Quick Cart
        </button>
      </div>
      <Link to={`/product/${product.slug}`}>
        <div className="mx-auto mt-5 mb-4">
          <p className="font-semibold hover:text-[#e94a6d]">
            {product.productName}
          </p>
          <p className="text-gray-700 text-[1.2rem]">
            ₦ {product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;

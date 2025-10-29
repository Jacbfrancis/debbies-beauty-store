import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import toast, { Toaster } from "react-hot-toast";
import { useQuickView } from "../store/useQuickViewStore";
import { useCurrentProduct } from "../store/useCurrentProductSrore";
import { Link } from "react-router-dom";
import { useCart } from "../store/useCart";

function CategorySection({ category, title }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const setCurrentProduct = useCurrentProduct(
    (state) => state.setCurrentProduct
  );
  const openQuickView = useQuickView((state) => state.openQuickView);

  const cart = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);

  function handleAddToCart(product) {
    const productExist = cart.some((cartItem) => product.id === cartItem.id);

    if (!productExist) {
      addToCart(product);
    } else {
      toast("Product is already in cart", {
        duration: 1500,
        position: "top-right",
        icon: "😅",
      });
    }
  }

  return (
    <div className="mt-16 px-6 lg:px-20">
      <Toaster />
      <h1 className="text-center text-[1.8rem] mt-8 mb-5 lg:mb-0 lg:text-[2.2rem]">
        {title}
      </h1>
      <div className="hidden justify-end items-center mb-8 lg:flex">
        <Link to={`/categories/${title}`}>
          <button className="text-center font-semibold w-[5.5rem] border-1 rounded-4xl px-3 py-1 cursor-pointer hover:bg-black hover:text-white">
            View all
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:flex lg:justify-start lg:items-start">
        {category.slice(0, 4).map((product, index) => (
          <div
            key={product.id}
            className="text-center cursor-pointer"
            onMouseOver={() => setCurrentIndex(index)}
            onMouseOut={() => setCurrentIndex(null)}
          >
            <div className="bg-[#f0f0f0] py-4 px-3 lg:[19rem] rounded-xl">
              <div className="flex justify-end items-center">
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={
                    currentIndex === index
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 10 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-[#e94a6d] shadow-md text-[#fff] w-[2rem] rounded-md justify-center items-center py-1.5 px-1.5 hidden lg:flex"
                  onClick={() => {
                    openQuickView();
                    setCurrentProduct(product.id);
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
                    animate={
                      currentIndex === index ? { scale: 1.15 } : { scale: 1 }
                    }
                    transition={{ duration: 0.4 }}
                    src={product.productImage}
                    alt=""
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
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-[#e94a6d] text-[#fff] shadow-md w-full rounded-md m-auto py-2.5 lg:hover:bg-[#f4335d] cursor-pointer hidden lg:block"
                onClick={() => handleAddToCart(product)}
              >
                QuickCart
              </motion.button>
              <button
                className="bg-[#e94a6d] text-[#fff] shadow-md w-[90%] rounded-md m-auto py-1.5 cursor-pointer lg:hidden"
                onClick={() => handleAddToCart(product)}
              >
                Quick Cart
              </button>
            </div>
            <Link to={`/product/${product.slug}`}>
              <div className="mx-auto mt-5 mb-4">
                <p className="font-semibold hover:text-[#e94a6d]">
                  {product.productName}
                </p>
                <p className="text-gray-700 text-[1.2rem]">₦ {product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center lg:hidden">
        <Link to={`/categories/${title}`}>
          <button className="text-[#e94a6d] text-center font-semibold w-[5.5rem] cursor-pointer">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategorySection;

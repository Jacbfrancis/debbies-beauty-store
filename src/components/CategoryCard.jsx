// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function CategoryCard({ productName, productPrice, productImage, active }) {
  return (
    <div className="text-center cursor-pointer">
      <div className="bg-[#f0f0f0] rounded-md py-4 px-3 w-[15rem] lg:w-[19rem]">
        <div className="flex justify-end items-center">
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
            className="bg-[#e94a6d] shadow-md text-[#fff] w-[2rem] rounded-md justify-center items-center py-1.5 px-1.5 hidden lg:flex"
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
        <span className="block w-[15rem] m-auto p-8">
          <motion.img
            initial={{ scale: 1 }}
            animate={active ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            src={productImage}
            alt="product_image"
          />
        </span>

        <button className="bg-[#e94a6d] text-[#fff] shadow-md w-[90%] rounded-md m-auto py-2 cursor-pointer lg:hidden">
          Quick Cart
        </button>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-[#e94a6d] text-[#fff] shadow-md w-full rounded-md m-auto py-2.5 lg:hover:bg-[#f4335d] cursor-pointer hidden lg:block"
        >
          Quick Cart
        </motion.button>
      </div>
      <div className="mx-auto my-4">
        <p className="mb-3 font-medium hover:text-[#e94a6d]">{productName}</p>
        <p className="text-gray-700 text-[1.2rem]">${productPrice}</p>
      </div>
    </div>
  );
}

export default CategoryCard;

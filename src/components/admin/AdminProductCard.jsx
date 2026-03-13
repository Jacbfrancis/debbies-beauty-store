// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function AdminProductCard({ product, index, currentIndex }) {
  return (
    <div className="text-center cursor-pointer">
      <div className="bg-[#f0f0f0] py-5 px-3 lg:[19rem] rounded-xl">
        <span className="lg:p-8 block">
          <motion.img
            initial={{ scale: 1 }}
            animate={currentIndex === index ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            src={product?.productImage}
            alt={product?.productName}
          />
        </span>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={
            currentIndex === index
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#e94a6d] text-[#fff] shadow-md w-[90%] rounded-md m-auto py-2.5 lg:hover:bg-[#f4335d] cursor-pointer hidden lg:block"
        >
          Edit Product
        </motion.button>
        <button className="bg-[#e94a6d] text-[#fff] text-[0.9rem] shadow-md w-[90%] rounded-md m-auto py-1.5 cursor-pointer lg:hidden">
          Edit Product
        </button>
      </div>

      <div className="mx-auto mt-5 mb-4">
        <p className="font-semibold hover:text-[#e94a6d]">
          {product?.productName}
        </p>
        <p className="text-gray-700 text-[1.2rem]">₦ {product?.price}</p>
      </div>
    </div>
  );
}

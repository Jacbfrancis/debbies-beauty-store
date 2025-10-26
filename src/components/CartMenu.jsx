// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";
import { useCartMenu } from "../store/useCartMenuStore";

function CartMenu() {
  const closeCartMenu = useCartMenu((state) => state.closeCartMenu);
  return (
    <motion.div
      initial={{ x: "90vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.65, ease: easeInOut, type: "tween" }}
      className="w-full h-[100vh] fixed top-0"
      onClick={closeCartMenu}
    >
      <div
        className="bg-[#fff] w-[90%] h-full px-5.5 py-3 lg:w-[34%] fixed top-0 right-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[1.3rem] font-semibold">Shopping Cart</h1>
          <span
            className="hover:bg-[#000] hover:text-white hover:rounded-full p-1.5 cursor-pointer"
            onClick={closeCartMenu}
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

        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: easeInOut }}
          className="text-center mt-20 flex flex-col justify-center items-center gap-8"
        >
          <span className="w-[20%] m-auto">
            <img src="/images/empty-cart.svg" alt="empty_cart" />
          </span>
          <div>
            <h3 className="text-[1.2rem] font-semibold mb-4">
              Your cart is waiting!
            </h3>
            <p className="text-[0.95rem] px-4">
              Check out our selection and buy some of your favorite items today.
            </p>
          </div>
          <button className="bg-[#000] text-[#fff] px-5 py-2.5 rounded-xl">
            Continue Shopping
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CartMenu;

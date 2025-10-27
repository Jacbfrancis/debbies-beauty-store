// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";
import { useCartMenu } from "../store/useCartMenuStore";

function EmptyCart() {
  const closeCartMenu = useCartMenu((state) => state.closeCartMenu);

  return (
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
      <button
        className="bg-[#000] text-[#fff] px-5 py-2.5 rounded-xl"
        onClick={closeCartMenu}
      >
        Continue Shopping
      </button>
    </motion.div>
  );
}

export default EmptyCart;

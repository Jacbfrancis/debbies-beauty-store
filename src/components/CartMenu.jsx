// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";
import { useCartMenu } from "../store/useCartMenuStore";
import EmptyCart from "./EmptyCart";
import { useCart } from "../store/useCart";
import CartItems from "./CartItems";

function CartMenu() {
  const closeCartMenu = useCartMenu((state) => state.closeCartMenu);
  const cart = useCart((state) => state.cart);

  return (
    <motion.div
      initial={{ x: "90vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.65, ease: easeInOut, type: "tween" }}
      className="w-full h-[100vh] absolute top-0"
      onClick={closeCartMenu}
    >
      <div
        className="bg-[#fff] w-[100%] h-full px-5.5 py-3 lg:w-[34%] fixed top-0 right-0 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-5">
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

        {cart.length < 1 ? <EmptyCart /> : <CartItems />}
      </div>
    </motion.div>
  );
}

export default CartMenu;

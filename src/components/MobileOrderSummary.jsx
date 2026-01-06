import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useCart } from "../store/useCart";

function MobileOrderSummary() {
  const [isSummaryMenuOpen, setIsSummaryMenu] = useState(false);

  const cart = useCart((state) => state.cart);

  const totalPrice = cart.reduce((acc, num) => {
    const total = num.quantity * num.price;
    return acc + total;
  }, 0);

  return (
    <div
      className="bg-[#f5f5f5]"
      onClick={() => setIsSummaryMenu(!isSummaryMenuOpen)}
    >
      <div className="flex justify-between items-center border-b-1 border-slate-400 px-6 pt-4.5 pb-3">
        <span className="text-blue-600 flex justify-center items-center">
          <p className="mr-2">Order Summary</p>
          <span className="font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down-icon lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </span>

        <h2 className="text-[1.2rem] font-bold">
          ₦ {totalPrice.toLocaleString()}
        </h2>
      </div>

      {isSummaryMenuOpen && (
        <motion.div
          // initial={{ y: 0 }}
          // animate={{ y: 10 }}
          className="h-[15rem] px-6 py-4.5"
          onClick={(e) => e.stopPropagation()}
        ></motion.div>
      )}
    </div>
  );
}

export default MobileOrderSummary;

import { useCart } from "../store/useCart";
import { useShippingModal } from "../store/useShippingModal";

function MobileOrderSummary({ isSummaryMenuOpen, setIsSummaryMenu }) {
  const cart = useCart((state) => state.cart);
  const openShippingModal = useShippingModal(
    (state) => state.openShippingModal
  );

  const totalPrice = cart.reduce((acc, num) => {
    const total = num.quantity * num.price;
    return acc + total;
  }, 0);

  const deliveryFee = 8000;

  return (
    <div
      className="bg-[#f5f5f5]"
      onClick={() => setIsSummaryMenu(!isSummaryMenuOpen)}
    >
      <div className="flex justify-between items-center border-b-1 border-slate-400 px-6 pt-4.5 pb-3">
        <span className="text-blue-600 flex justify-center items-center">
          <p className="mr-2">Order summary</p>
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
        <div
          className="bg-[#f5f5f5] w-full px-6 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          {cart.map((product) => (
            <div
              key={product.id}
              className="w-full mb-7.5 flex justify-between items-center text-[0.9rem]"
            >
              <div className="w-[60%] flex justify-start items-center gap-4">
                <span className="bg-black text-white absolute block left-15 mb-10 px-1.5 py-0.5 rounded-lg border-white border-3 md:hidden">
                  2
                </span>
                <span className="w-[4rem] block border-1 border-[#e94a6d] rounded-md">
                  <img src={product.productImage} alt={product.id} />
                </span>
                <p>{product.productName}</p>
              </div>

              <div>
                <p>₦ {(product.price * product.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}
          <div className="text-[0.95rem] flex justify-between items-center mt-9 mb-3">
            <p>Subtotal </p>
            <p className="font-semibold">₦ {totalPrice.toLocaleString()} </p>
          </div>
          <div className="text-[0.95rem] flex justify-between items-center">
            <p className="flex justify-between items-center">
              Shipping{" "}
              <span
                className="ml-2"
                onClick={() => {
                  setIsSummaryMenu(false);
                  openShippingModal();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </span>{" "}
            </p>
            <p className="font-semibold">₦ {deliveryFee.toLocaleString()} </p>
          </div>
          <div className="text-[1.15rem] font-bold flex justify-between items-center mt-4.5">
            <p>Total </p>
            <p className="font-semibold">
              ₦ {(totalPrice + deliveryFee).toLocaleString()}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileOrderSummary;

import { useCart } from "../store/useCart";
import { useShippingModal } from "../store/useShippingModal";

function DesktopOrderSummary() {
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
    <div className="px-14 py-10 h-full">
      <div className="w-[95%]">
        <h2 className="text-[1.3rem] font-bold mb-7">Order Summary</h2>

        <div className="text-[#676767] flex justify-between items-center border-[#a0a0a0] border-b-1 mb-5 gap-8 pb-3">
          <span className="w-[70%]">Product</span>
          <span className="w-[15%]">Quantity</span>
          <span className="text-center w-[15%]">Price</span>
        </div>
        <div className="h-[50vh] overflow-scroll border-[#a0a0a0] border-b-1">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-4.5 w-[70%]">
                <span className="block w-[4rem] border-1 border-[#e94a6d] rounded-md mb-4 p-1">
                  <img src={item.productImage} alt={item.productName} />
                </span>
                <h3 className="font-normal">{item.productName}</h3>
              </div>

              <span className="w-[15%]">
                <h4>{item.quantity}</h4>
              </span>

              <span className="w-[15%]">
                <h3 className="font-normal">
                  {" "}
                  ₦{(item.price * item.quantity).toLocaleString()}
                </h3>
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-5 mb-3">
          <p>Subtotal </p>
          <p>₦ {totalPrice.toLocaleString()} </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="flex justify-between items-center">
            <p>Shipping</p>
            <span className="ml-2" onClick={() => openShippingModal()}>
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
          </span>
          <p>₦ {(8000).toLocaleString()} </p>
        </div>

        <div className="text-[1.15rem] font-semibold flex justify-between items-center">
          <p>Total</p>
          <p>₦ {(totalPrice + deliveryFee).toLocaleString()} </p>
        </div>
      </div>
    </div>
  );
}

export default DesktopOrderSummary;

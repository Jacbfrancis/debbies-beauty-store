import { useNavigate } from "react-router-dom";
import { useCart } from "../store/useCart";
import { useCartMenu } from "../store/useCartMenuStore";

function CartItems() {
  const navigate = useNavigate();

  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const updateQuantity = useCart((state) => state.updateQuantity);

  const closeCartMenu = useCartMenu((state) => state.closeCartMenu);

  const totalPrice = cart.reduce((acc, item) => {
    const totalItems = item.price * item.quantity;
    return acc + totalItems;
  }, 0);

  return (
    <>
      <div className="h-[100vh] overflow-y-scroll [scrollbar-width:none]">
        {cart.map((cartItem) => (
          <div
            key={cartItem.id}
            className="mt-10 flex justify-between items-center gap-3 border-b-1 border-[#bcbcbc9e] pb-5"
          >
            <span className="bg-[#f0f0f0] rounded-lg w-[30%] md:w-[15%] lg:w-[25%]">
              <img
                className="w-full"
                src={cartItem.productImage}
                alt={cartItem.productName}
              />
            </span>

            <div className="w-[30%] flex flex-col justify-start items-start gap-1 lg:w-[60%]">
              <h2 className="text-[0.9rem] font-bold md:hidden">
                {cartItem.productName.slice(0, 18)}...
              </h2>
              <h2 className="text-[0.9rem] font-bold hidden md:block">
                {cartItem.productName}
              </h2>
              <p> ₦ {cartItem.price.toLocaleString()}</p>
              <span className="w-[40%] flex justify-center items-center rounded-lg px-13 py-[0.4rem] my-1 border-1 border-[#bcbcbc9e]">
                <button
                  onClick={() => {
                    if (cartItem.quantity > 1) {
                      decreaseQuantity(cartItem.id);
                    }
                  }}
                >
                  -
                </button>
                <input
                  className="text-center w-[4rem] focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={cartItem.quantity}
                  type="number"
                  min="1"
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const value =
                      inputValue === "" || inputValue < 1
                        ? 1
                        : Number(inputValue);
                    updateQuantity(cartItem.id, value);
                  }}
                />
                <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
              </span>
            </div>

            <span className="w-[10%]">
              <button
                className="cursor-pointer"
                onClick={() => removeFromCart(cartItem.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#eb0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash-icon lucide-trash"
                >
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </span>
          </div>
        ))}
      </div>
      <div className="py-8">
        <span className="px-4 font-semibold flex justify-between items-center">
          <h2>Total</h2>
          <p>₦{totalPrice.toLocaleString()}</p>
        </span>
        <div className="flex justify-center items-center gap-5 my-5">
          <button
            onClick={() => {
              navigate("/checkout");
              closeCartMenu();
            }}
            className="bg-[#000] text-center text-[#fff] w-[50%] px-7 py-3.5 rounded-md"
          >
            Check Out
          </button>

          <button
            onClick={() => {
              navigate("/cart");
              closeCartMenu();
            }}
            className="bg-[#e94a6d] text-center text-[#fff] w-[50%] px-7.5 py-3.5 rounded-md"
          >
            View Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItems;

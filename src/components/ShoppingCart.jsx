import { useNavigate } from "react-router-dom";
import { useCart } from "../store/useCart";

function ShoppingCart() {
  const navigate = useNavigate();

  const cart = useCart((state) => state.cart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const totalPrice = cart.reduce((acc, item) => {
    const price = item.quantity * item.price;
    return acc + price;
  }, 0);

  return (
    <div className="px-6 lg:px-20">
      <h2 className="text-[2.3rem] text-center font-medium my-8">
        Your Shopping Cart
      </h2>

      {/* Shopping  Cart for Mobile */}

      {cart.map((cartItem) => (
        <div
          key={cartItem.id}
          className="border-[#bcbcbc9e] border-b-1 py-6 flex justify-between items-center lg:hidden"
        >
          <span className="bg-[#bcbcbc9e] py-4 w-[20%] block">
            <img src={cartItem.productImage} alt={cartItem.productName} />
          </span>

          <div className="flex flex-col justify-start items-start gap-1 w-[60%]">
            <h2 className="text-[0.9rem] font-bold md:hidden">
              {cartItem.productName}
            </h2>
            <p> ₦ {(cartItem.price * cartItem.quantity).toLocaleString()}</p>
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
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const value =
                    inputValue === "" || inputValue < 1
                      ? 1
                      : Number(inputValue);
                  updateQuantity(cartItem.id, value);
                }}
                value={cartItem.quantity}
                type="number"
                min="1"
              />
              <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
            </span>
          </div>

          <span className="w-[10%]" onClick={() => removeFromCart(cartItem.id)}>
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
          </span>
        </div>
      ))}

      {/* Shopping  Cart for Desktop */}
      <div className="hidden lg:block">
        <ul className="text-[#a3a3a3] font-bold border-[#bcbcbc9e] border-b-1 border-t-1 py-4 grid-cols-10 gap-4 lg:grid">
          <li className="col-span-5">Product</li>
          <li className="col-span-3">Quantity</li>
          <li className="col-span-2">Total</li>
        </ul>

        <div>
          {cart.map((cartItem) => (
            <div
              className="grid grid-cols-10 gap-4 border-b-1 border-[#bcbcbc9e]"
              key={cartItem.id}
            >
              <div className="col-span-5 flex justify-start items-center gap-8 my-8">
                <span className="bg-[#bcbcbc9e] py-4 w-[20%] block">
                  <img src={cartItem.productImage} alt="" />
                </span>

                <div>
                  <h3>{cartItem.productName}</h3>
                  <p>₦ {cartItem.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="col-span-3 flex justify-start gap-4 items-center">
                <span className=" w-[30%] flex justify-start items-center rounded-lg px-4 py-[0.4rem] my-1 border-1 border-[#bcbcbc9e]">
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
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const value =
                        inputValue === "" || inputValue < 1
                          ? 1
                          : Number(inputValue);
                      updateQuantity(cartItem.id, value);
                    }}
                    value={cartItem.quantity}
                    type="number"
                    min="1"
                  />
                  <button onClick={() => increaseQuantity(cartItem.id)}>
                    +
                  </button>
                </span>

                <span onClick={() => removeFromCart(cartItem.id)}>
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
                </span>
              </div>

              <div className="col-span-2 font-bold flex justify-start items-center">
                <p>₦ {(cartItem.price * cartItem.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Instructons & Total Price */}
      <div className="mt-10 flex flex-col justify-around items-sartt lg:flex-row">
        <div className="w-full mb-8 lg:text-center lg:w-[37%]">
          <p className="text-gray-800 mb-4">Order special instructions</p>
          <textarea className="border-gray-500 border-1 w-full px-3 py-4"></textarea>
        </div>

        <div className="text-center text-gray-800 w-full lg:w-[37%]">
          <h3 className="mb-3 font-bold">
            Estimated total ₦{totalPrice.toLocaleString()}
          </h3>
          <p className="text-[0.82rem] mb-5">
            Taxes, discounts and{" "}
            <span className="underline tracking-wider"> shipping </span>{" "}
            calculated at checkout.
          </p>

          <button
            className="bg-[#000] text-center text-[#fff] w-full px-7 py-3.5 rounded-md"
            onClick={() => navigate("/checkout")}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

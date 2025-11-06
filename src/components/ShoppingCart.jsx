import { useCart } from "../store/useCart";

function ShoppingCart() {
  const cart = useCart((state) => state.cart);

  return (
    <div className="px-6 lg:px-20">
      <h2 className="text-[2.3rem] text-center font-medium my-8">
        Your Shopping Cart
      </h2>

      <ul className="justify-between items-center hidden lg:flex">
        <li>Product</li>
        <li>Quantity</li>
        <li>Total</li>
      </ul>

      <div>
        {cart.map((cartItem, index) => (
          <div
            key={index}
            className="border-[#bcbcbc9e] border-b-1 py-6 flex justify-between items-center"
          >
            <span className="bg-[#bcbcbc9e] py-4 w-[20%] block lg:w-[10%]">
              <img src={cartItem.productImage} alt={cartItem.productName} />
            </span>

            <div className="flex flex-col justify-start items-start gap-1 w-[60%]">
              <h2 className="text-[0.9rem] font-bold md:hidden">
                {cartItem.productName}
              </h2>
              <h2 className="text-[0.9rem] font-bold hidden md:block">
                {cartItem.productName}
              </h2>
              <p> ₦ {cartItem.price}</p>
              <span className="w-[40%] flex justify-center items-center rounded-lg px-13 py-[0.4rem] my-1 border-1 border-[#bcbcbc9e]">
                <button>-</button>
                <input
                  className="text-center w-[4rem] focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  defaultValue={cartItem.quantity}
                  type="number"
                  min="1"
                />
                <button>+</button>
              </span>
            </div>

            <span className="w-[10%]">
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
      </div>
    </div>
  );
}

export default ShoppingCart;

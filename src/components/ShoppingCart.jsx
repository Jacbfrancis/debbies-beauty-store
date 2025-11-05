import { useCart } from "../store/useCart";

function ShoppingCart() {
  const cart = useCart((state) => state.cart);

  return (
    <div className="px-6 lg:px-20">
      <h2 className="text-[2.3rem] text-center font-medium my-8">
        Your Shopping Cart
      </h2>

      <div>
        {cart.map((cartItem, index) => (
          <div
            key={index}
            className="border-[#bcbcbc9e] border-b-1 flex justify-between items-center"
          >
            <span>
              <img src={cartItem.productImage} alt={cartItem.productName} />
            </span>

            <div className="flex flex-col justify-start items-start gap-1">
              <h2 className="text-[0.9rem] font-bold md:hidden">
                {cartItem.productName.slice(0, 18)}...
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;

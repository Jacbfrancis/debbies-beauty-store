import { useCart } from "../store/useCart";

function CartItems() {
  const cart = useCart((state) => state.cart);

  return (
    <>
      <div className="h-[75vh] overflow-y-scroll [scrollbar-width:none]">
        {cart.map((cartItem) => (
          <div className="mt-10 flex justify-center items-start gap-6 border-b-1 border-[#bcbcbc9e] pb-5">
            <span className="bg-[#f0f0f0] rounded-lg w-[25%]">
              <img src={cartItem.productImage} alt="" />
            </span>

            <div className="w-[60%] flex flex-col justify-center gap-1 items-start">
              <h2 className="text-[0.9rem] font-bold">
                {cartItem.productName.slice(0, 20)}...
              </h2>
              <p> ₦ {cartItem.price}</p>
              <span className="w-[40%] flex justify-center rounded-lg items-center px-13 py-[0.4rem] border-1 border-[#bcbcbc9e]">
                <button>-</button>
                <input className="text-center w-[4rem]" />
                <button>+</button>
              </span>
            </div>

            <span>
              <p className="text-[#868686] underline">Remove</p>
            </span>
          </div>
        ))}
      </div>
      <div className="py-8">
        <span className="font-semibold flex justify-between items-center">
          <h2>Total</h2>
          <p>₦{120000}</p>
        </span>
        <div className="flex justify-center items-center gap-5 mt-5">
          <button className="bg-[#000] text-[#fff] w-[50%] px-5 py-2.5 rounded-md">
            Check Out
          </button>
          <button className="bg-[#fff] text-[#000] w-[50%] px-5 py-2.5 rounded-md border-2">
            View Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItems;

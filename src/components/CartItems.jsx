import { useCart } from "../store/useCart";

function CartItems() {
  const cart = useCart((state) => state.cart);

  return (
    <>
      <div className="h-[75vh] overflow-y-scroll [scrollbar-width:none]">
        {cart.map((cartItem) => (
          <div
            key={cartItem.id}
            className="mt-10 flex justify-between items-center gap-6 border-b-1 border-[#bcbcbc9e] pb-5"
          >
            <span className="bg-[#f0f0f0] rounded-lg w-[20%] md:w-[15%] lg:w-[25%]">
              <img className="w-full" src={cartItem.productImage} alt="" />
            </span>

            <div className="w-[30%] flex flex-col justify-center gap-1 items-start lg:w-[60%]">
              <h2 className="text-[0.9rem] font-bold">
                {cartItem.productName.slice(0, 20)}...
              </h2>
              <p> ₦ {cartItem.price}</p>
              <span className="w-[40%] flex justify-center rounded-lg items-center px-13 py-[0.4rem] my-1 border-1 border-[#bcbcbc9e]">
                <button>-</button>
                <input className="text-center w-[4rem]" defaultValue={0} />
                <button>+</button>
              </span>
            </div>

            <span>
              <button className="text-[#868686] underline">Remove</button>
            </span>
          </div>
        ))}
      </div>
      <div className="py-8">
        <span className="px-4 font-semibold flex justify-between items-center">
          <h2>Total</h2>
          <p>₦{120000}</p>
        </span>
        <div className="flex justify-center items-center gap-5 mt-5">
          <button className="bg-[#000] text-[#fff] w-[50%] px-5 py-2.5 rounded-md">
            Check Out
          </button>
          <button className="bg-[#e94a6d] text-[#fff] w-[50%] px-5 py-2.5 rounded-md">
            View Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItems;

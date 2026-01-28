import { useCart } from "../store/useCart";

function DesktopOrderSummary() {
  const cart = useCart((state) => state.cart);
  console.log(cart);

  return (
    <div className="px-14 py-10 h-full">
      <div className="w-[90%]">
        <h2 className="text-[1.4rem] font-bold mb-10">Order Summary</h2>
        {cart.map((cart) => (
          <div
            key={cart.id}
            className="mb-5 mt-2.5 flex justify-between items-center"
          >
            <div className="flex justify-between items-center gap-4.5">
              <span className="block w-[4rem] border-1 border-[#e94a6d] rounded-md mb-4 p-1">
                <img src={cart.productImage} alt={cart.productName} />
              </span>
              <h3 className="font-semibold">{cart.productName}</h3>
            </div>

            <h3 className="font-semibold"> ₦{cart.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopOrderSummary;

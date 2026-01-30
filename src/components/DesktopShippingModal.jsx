import { useShippingModal } from "../store/useShippingModal";

function DesktopShippingModal() {
  const closeShippingModal = useShippingModal(
    (state) => state.closeShippingModal
  );

  return (
    <div
      className="bg-[#2f2f2f80] backdrop-blur-sm w-full h-[100vh] absolute top-0 flex justify-center items-center px-5"
      onClick={() => closeShippingModal()}
    >
      <div
        className="bg-white w-[35%] rounded-xl p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[1.2rem] font-semibold">Shipping</h2>
          <span onClick={() => closeShippingModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </div>

        <div className="text-[0.94rem] font-normal mt-6 flex flex-col justify-center items-center gap-5">
          <p>
            Interstate delivery takes 4-8 working days (outside Lagos.) Express
            delivery only applies within Lagos and items are delivered 12 - 48
            hours after purchase. It is the buyer's responsibility to provide
            accurate delivery details to avoid delays.
          </p>

          <p>
            The appropriate location must be chosen, else the package will not
            be dispatched.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesktopShippingModal;

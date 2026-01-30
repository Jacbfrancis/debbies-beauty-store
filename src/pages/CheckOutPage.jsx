import { useState } from "react";
import CheckOutForm from "../components/CheckOutForm";
import MobileOrderSummary from "../components/MobileOrderSummary";
import ScrollToTop from "../components/ScrollToTop";
import MobileShippingModal from "../components/MobileShippingModal";
import { useShippingModal } from "../store/useShippingModal";
import DesktopOrderSummary from "../components/DesktopOrderSummary";
import DesktopShippingModal from "../components/DesktopShippingModal";

function CheckOutPage() {
  const [isSummaryMenuOpen, setIsSummaryMenu] = useState(false);

  const isShippingModalOpen = useShippingModal(
    (state) => state.isShippingModalOpen
  );

  return (
    <div className="bg-[#f5f5f5] lg:flex justify-start items-start">
      <div className="lg:w-[55%]">
        <span className="lg:hidden">
          <MobileOrderSummary
            isSummaryMenuOpen={isSummaryMenuOpen}
            setIsSummaryMenu={setIsSummaryMenu}
          />
        </span>

        <CheckOutForm />

        <span className="lg:hidden">
          <MobileOrderSummary
            isSummaryMenuOpen={isSummaryMenuOpen}
            setIsSummaryMenu={setIsSummaryMenu}
          />
        </span>

        {isShippingModalOpen && (
          <div>
            <ScrollToTop />
            <span className="lg:hidden">
              <MobileShippingModal />
            </span>
            <span className="hidden lg:block">
              <DesktopShippingModal />
            </span>
          </div>
        )}
      </div>

      <div className="w-[45%] hidden lg:block">
        <DesktopOrderSummary />
      </div>
    </div>
  );
}

export default CheckOutPage;

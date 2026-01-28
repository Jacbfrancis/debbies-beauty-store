import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useQuickView } from "../store/useQuickViewStore";
import ScrollToTop from "./ScrollToTop";
import { useNavMenu } from "../store/useNavMenuStore";
import { useCartMenu } from "../store/useCartMenuStore";
import { useShippingModal } from "../store/useShippingModal";

function MainLayout() {
  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);
  const isNavMenuOpen = useNavMenu((state) => state.isNavMenuOpen);
  const isCartMenuOpen = useCartMenu((state) => state.isCartMenuOpen);
  const isShippingModalOpen = useShippingModal(
    (state) => state.isShippingModalOpen
  );

  return (
    <div
      className={
        isQuickViewOpen ||
        isNavMenuOpen ||
        isCartMenuOpen ||
        isShippingModalOpen
          ? "overflow-y-hidden h-[100vh]"
          : ""
      }
    >
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;

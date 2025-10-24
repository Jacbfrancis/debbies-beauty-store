import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useQuickView } from "../store/useQuickViewStore";
import ScrollToTop from "./ScrollToTop";
import { useNavMenu } from "../store/useNavMenuStore";
import { useCartMenu } from "../store/useCartMenuStore";

function MainLayout() {
  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);
  const isNavMenuOpen = useNavMenu((state) => state.isNavMenuOpen);
  const isCartMenuOpen = useCartMenu((state) => state.isCartMenuOpen);

  return (
    <div
      className={
        isQuickViewOpen || isNavMenuOpen || isCartMenuOpen
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

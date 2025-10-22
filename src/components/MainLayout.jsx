import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useQuickView } from "../store/useQuickViewStore";
import ScrollToTop from "./ScrollToTop";

function MainLayout() {
  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);

  return (
    <div className={isQuickViewOpen ? "lg:overflow-y-hidden lg:h-[100vh]" : ""}>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;

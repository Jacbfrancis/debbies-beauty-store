import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CustomerAssurance from "./CustomerAssurance";
import Footer from "./Footer";
import { useQuickView } from "../store/useQuickViewStore";

function MainLayout() {
  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);

  return (
    <div className={isQuickViewOpen ? "lg:overflow-y-hidden lg:h-[100vh]" : ""}>
      <Navbar />
      <Outlet />
      <CustomerAssurance />
      <Footer />
    </div>
  );
}

export default MainLayout;

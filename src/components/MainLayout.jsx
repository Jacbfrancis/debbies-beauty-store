import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CustomerAssurance from "./CustomerAssurance";
import Footer from "./Footer";

function MainLayout() {
  return (
    // <div className="lg:overflow-y-hidden lg:h-[100vh]">
    <div>
      <Navbar />
      <Outlet />
      <CustomerAssurance />
      <Footer />
    </div>
  );
}

export default MainLayout;

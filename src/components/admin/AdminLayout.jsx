//import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import AdminSideBar from "./AdminSideBar";

export default function AdminLayout() {
  return (
    <div className="bg-gray-50">
      <DashboardNavbar />
      <div className="md:flex justify-start items-start">
        <AdminSideBar />
        <Outlet />
      </div>
    </div>
  );
}

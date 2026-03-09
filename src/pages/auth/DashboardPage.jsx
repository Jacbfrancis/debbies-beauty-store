import AdminSideBar from "../../components/admin/AdminSideBar";
import CustomerChart from "../../components/admin/CustomerChart";
import DashboardNavbar from "../../components/admin/DashboardNavbar";
import SalesCards from "../../components/admin/SalesCards";

export default function DashboardPage() {
  return (
    <div className="bg-gray-50">
      <DashboardNavbar />
      <div className="md:flex justify-start items-start">
        <AdminSideBar />
        <div className="w-full">
          <SalesCards />
          <CustomerChart />
        </div>
      </div>
    </div>
  );
}

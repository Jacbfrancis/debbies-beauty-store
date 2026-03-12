import CustomerChart from "../../components/admin/CustomerChart";
import RecentOrders from "../../components/admin/RecentOrders";
import SalesCards from "../../components/admin/SalesCards";

export default function DashboardPage() {
  return (
    <div className="w-full md:w-[75%]">
      <SalesCards />
      <div className="md:flex justify-start items-center gap-4 md:px-14">
        <CustomerChart />
        <RecentOrders />
      </div>
    </div>
  );
}

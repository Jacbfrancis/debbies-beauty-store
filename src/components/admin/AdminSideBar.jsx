import { Link } from "react-router-dom";

export default function AdminSideBar() {
  return (
    <div className="bg-[#fdf5f7] hidden border-slate-200 border-r-1 w-[25%] h-[100vh] md:block">
      <ul className="font-semibold pt-8 px-8 flex flex-col gap-7">
        <li>
          <Link to={"/admin-dashboard"}> Dashboard</Link>
        </li>
        <li>Products</li>
        <li>Orders</li>
        <li>Costumers</li>
      </ul>
    </div>
  );
}

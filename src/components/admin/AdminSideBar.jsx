import { Link } from "react-router-dom";

export default function AdminSideBar() {
  return (
    <div className="hidden md:flex flex-col bg-[#fdf5f7] border-r border-slate-200 w-64 h-screen sticky top-0">
      {/* Branding / Logo Area */}
      <div className="p-8">
        <h1 className="text-2xl text-center font-black text-[#e94a6d] tracking-tight">
          Debbies Beauty Store
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          <li>
            <Link
              to={"admin/dashboard"}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200`}
            >
              {" "}
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to={"admin/products"}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200`}
            >
              {" "}
              Products
            </Link>
          </li>

          <li>
            <Link
              to={"admin/orders"}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200`}
            >
              {" "}
              Orders
            </Link>
          </li>

          <li>
            <Link
              to={"admin/customers"}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200`}
            >
              {" "}
              Customers
            </Link>
          </li>
        </ul>
      </nav>

      {/* User / Bottom Section */}
      <div className="p-4 border-t border-slate-200">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors font-medium">
          Sign Out
        </button>
      </div>
    </div>
  );
}

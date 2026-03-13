import { Link, useNavigate } from "react-router-dom";
import { useAdminNavMenuStore } from "../../store/useAdminNavMenu";

export default function AdminNavMenu() {
  const navigate = useNavigate("");

  const closeIsAdminMenu = useAdminNavMenuStore(
    (state) => state.closeIsAdminMenu
  );

  return (
    <div
      className="bg-black/10 w-full shadow-lg z-50 fixed top-20"
      onClick={() => closeIsAdminMenu(false)}
    >
      <div
        className="bg-[#fff] w-[65%] h-[100vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="font-semibold px-8 py-7 flex flex-col gap-8">
          <li
            onClick={() => {
              navigate("/admin/dashboard");
              closeIsAdminMenu(false);
            }}
          >
            Dashboard
          </li>
          <li
            onClick={() => {
              navigate("/admin/products");
              closeIsAdminMenu(false);
            }}
          >
            Products
          </li>
          <li
            onClick={() => {
              navigate("/admin/orders");
              closeIsAdminMenu(false);
            }}
          >
            Orders
          </li>
          <li
            onClick={() => {
              navigate("/admin/customers");
              closeIsAdminMenu(false);
            }}
          >
            {" "}
            Custumers
          </li>
        </ul>
      </div>
    </div>
  );
}

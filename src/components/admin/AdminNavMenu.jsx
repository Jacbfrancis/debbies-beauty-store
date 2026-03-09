import { Link } from "react-router-dom";
import { useAdminNavMenuStore } from "../../store/useAdminNavMenu";

export default function AdminNavMenu() {
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
          <li>
            <Link to={"/admin-dashboard"}> Dashboard</Link>
          </li>
          <li>Products</li>
          <li>Orders</li>
          <li>Costumers</li>
        </ul>
      </div>
    </div>
  );
}

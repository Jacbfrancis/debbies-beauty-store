import { Link } from "react-router-dom";
import AdminNavMenu from "./AdminNavMenu";
import { useAdminNavMenuStore } from "../../store/useAdminNavMenu";

export default function DashboardNavbar() {
  const isAdminNavMenuOpen = useAdminNavMenuStore(
    (state) => state.isAdminNavMenuOpen
  );
  const openIsAdminNavMenu = useAdminNavMenuStore(
    (state) => state.openIsAdminNavMenu
  );
  const closeIsAdminMenu = useAdminNavMenuStore(
    (state) => state.closeIsAdminMenu
  );

  return (
    <nav className="bg-[#fff]">
      <div className="flex justify-between items-center shadow-lg px-6 py-4 md:justify-center md:shadow-sm">
        {isAdminNavMenuOpen ? (
          <span className="md:hidden" onClick={() => closeIsAdminMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        ) : (
          <span className="md:hidden" onClick={() => openIsAdminNavMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </span>
        )}

        <span className="cursor-pointer w-[14%] block lg:w-[5%]">
          <Link to={"/"}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </span>

        <span className="cursor-pointer block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
        </span>
      </div>
      {isAdminNavMenuOpen && <AdminNavMenu />}
    </nav>
  );
}

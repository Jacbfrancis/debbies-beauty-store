import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function ProfileDropdown({ setIsProfileModalOpen, userEmail }) {
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/25 hidden lg:block"
      onClick={() => setIsProfileModalOpen(false)}
    >
      <div
        className="absolute top-27 right-10 mt-2 w-90 origin-top-right rounded-xl border border-gray-100 bg-white shadow-xl ring-1 ring-black/5 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / User Info */}
        <div className="bg-gray-50/50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Account
          </p>
          <p className="truncate text-sm font-medium text-gray-900">
            {userEmail || ""}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-1">
          <button
            className="flex w-full items-center rounded-lg px-3 py-4 text-sm text-gray-700 transition-colors hover:bg-gray-100"
            onClick={() => {
              navigate("/profile");
              setIsProfileModalOpen(false);
            }}
          >
            Profile
          </button>
          <button
            className="flex w-full items-center rounded-lg px-3 py-4 text-sm text-gray-700 transition-colors hover:bg-gray-100"
            onClick={() => {
              navigate("/orders");
              setIsProfileModalOpen(false);
            }}
          >
            Orders
          </button>
        </div>

        {/* Action Section */}
        <div className="border-t border-gray-100 p-1">
          <button
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
            onClick={(e) => {
              handleLogout(e);
              setIsProfileModalOpen(false);
            }}
          >
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

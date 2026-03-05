import { signOut } from "firebase/auth";
import { useLogoutModal } from "../store/useLogoutModal";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function LogoutModal() {
  const navigate = useNavigate();

  const closeLogoutModal = useLogoutModal((state) => state.closeLogoutModal);

  async function handleLogout(e) {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/sign-in");
      closeLogoutModal();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={closeLogoutModal}
    >
      <div
        className="w-[90%] max-w-sm rounded-2xl bg-white p-6 shadow-xl md:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-900">Confirm Logout</h2>
        <p className="mt-2 text-gray-600">
          Are you sure you want to log out? You will be required to sign back in
          to access your account and order history.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            onClick={closeLogoutModal}
          >
            Cancel
          </button>

          <button
            className="bg-[#e94a6d] flex min-w-[100px] items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600 disabled:bg-red-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

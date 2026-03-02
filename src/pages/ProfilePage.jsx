import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  async function handleLogou(e) {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/register");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="py-5">
      <span>Profile page</span>

      <div className="text-center my-5">
        <button
          onClick={handleLogou}
          className="bg-[#e94a6d] text-white px-3 py-3 w-[50%]"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

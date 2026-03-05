//import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import LoadingSpinner from "../components/LoadingSpinner";
import LogoutModal from "../components/LogoutModal";
import { useLogoutModal } from "../store/useLogoutModal";

export default function MyAccountPage() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const isLogoutModal = useLogoutModal((state) => state.isLogoutModal);
  const openLogoutModal = useLogoutModal((state) => state.openLogoutModal);

  useEffect(() => {
    function unsubscribe() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docSnap = await getDoc(doc(db, "users", user.uid));
          setUserDetails(docSnap.data());
        } else {
          navigate("/sign-in");
        }
        setLoading(false);
      });
    }
    unsubscribe();
  }, [navigate]);

  return (
    <div className="bg-[#f3f5f7] tracking-wide px-6 pt-4 md:px-20">
      <h1 className="text-[1.3rem] font-semibold text-center py-5">Profile</h1>

      <div className="bg-white rounded-xl py-6 px-5 grid gap-4 md:p-10 md:grid-cols-2">
        <div className="hidden w-[60%] m-auto md:block">
          <span className="block">
            <img src="/images/logo1.png" alt="logo_img" />
          </span>
        </div>

        {isLogoutModal && <LogoutModal />}

        {loading ? (
          <LoadingSpinner borderColor={"border-[#e94a6d]"} />
        ) : (
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label className="text-[#676767]">First Name</label>
              <input
                disabled
                value={userDetails?.firstName || ""}
                type="text"
                className="bg-[#f3f5f7] text-[1.2rem] font-light outline-none w-full px-4 py-2 block border-1 border-[#d2d2d2] rounded-4xl"
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label className="text-[#676767]">Last Name</label>
              <input
                disabled
                value={userDetails?.lastName || ""}
                type="text"
                className="bg-[#f3f5f7] text-[1.2rem] font-light outline-none w-full px-4 py-2 block border-1 border-[#d2d2d2] rounded-4xl"
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label className="text-[#676767]">Mobile Number</label>
              <input
                disabled
                value={userDetails?.mobileNumber || ""}
                type="number"
                className="bg-[#f3f5f7] text-[1.2rem] font-light outline-none w-full px-4 py-2 block border-1 border-[#d2d2d2] rounded-4xl"
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label className="text-[#676767]">Email</label>
              <input
                disabled
                value={userDetails?.email || ""}
                type="email"
                className="bg-[#f3f5f7] text-[1.2rem] font-light outline-none w-full px-4 py-2 block border-1 border-[#d2d2d2] rounded-4xl"
              />
            </div>
            <span className="text-[#707070] text-[0.87rem] text-center my-4 block md:px-5 leading-relaxed">
              To update your account information, please reach out to our
              support team at{" "}
              <a
                href="mailto:contact@debbiesbeautystore.com"
                className="text-[#e94a6d] underline"
              >
                contact@debbiesbeautystore.com
              </a>
            </span>
          </div>
        )}
      </div>

      <div className="text-center py-8">
        <button
          className="bg-[#e94a6d] font-bold text-white rounded-4xl px-3 py-3 shadow-lg w-[50%] md:w-[20%]"
          onClick={openLogoutModal}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

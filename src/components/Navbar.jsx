import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import Navmenu from "./Navmenu";
import { useNavMenu } from "../store/useNavMenuStore";
import { Categories } from "../constants/categories";
import CartMenu from "./CartMenu";
import { useCartMenu } from "../store/useCartMenuStore";
import { useSearchQuery } from "../store/useSearchStore";
import { useCart } from "../store/useCart";
import { db } from "../firebase/firebase";
import ProfileDropdown from "./ProfileDropDown";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthStore } from "../store/useAuthStore";

function Navbar() {
  const navigate = useNavigate();
  const [currentHover, setCurrentHover] = useState(null);

  const user = useAuthStore((state) => state.user);

  const isNavMenuOpen = useNavMenu((state) => state.isNavMenuOpen);
  const openNavMenu = useNavMenu((state) => state.openNavMenu);

  const isCartMenuOpen = useCartMenu((state) => state.isCartMenuOpen);
  const openCartMenu = useCartMenu((state) => state.openCartMenu);

  const searchQuery = useSearchQuery((state) => state.searchQuery);
  const setSearchQuery = useSearchQuery((state) => state.setSearchQuery);

  const cart = useCart((state) => state.cart);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    function unsubscrbe() {
      if (user) {
        onSnapshot(doc(db, "users", user.uid), (snapshot) => {
          setUserDetails(snapshot.data());
        });
      }
    }
    unsubscrbe();
  }, [user]);

  return (
    <nav>
      <div className="bg-[#e94a6d] text-[#fff] text-center py-2 hidden lg:block">
        <p>Welcome to Debbies Beauty Store</p>
      </div>

      <div className="flex justify-between items-center py-6 px-6 lg:px-20">
        <span className="block lg:hidden" onClick={openNavMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </span>

        <span className="cursor-pointer w-[15%] lg:w-[5%]">
          <Link to="/">
            <img src="/images/logo.png" alt="logo_img" />
          </Link>
        </span>

        <form
          className="bg-[#fff] border-1 w-[50%] px-5 hidden rounded-3xl justify-between items-center lg:flex"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search`);
          }}
        >
          <button className="inline-block cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#314158"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <input
            className="text-slate-700 text-[1.2rem] h-[3rem] w-full px-6 focus:outline-none"
            placeholder="Search for products"
            type="text"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="flex justify-between items-center gap-8">
          {user ? (
            <span
              className="hover:bg-[#fdf5f7] p-2 rounded-lg hidden justify-center items-center gap-1 lg:flex"
              onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
              <span className="text-[#c6c6c6] block">
                {isProfileModalOpen ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <ProfileDropdown
                      setIsProfileModalOpen={setIsProfileModalOpen}
                      userEmail={userDetails.email}
                    />
                  </span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </span>
            </span>
          ) : (
            <div className="text-[1.15rem] font-semibold hidden lg:flex justify-between items-center gap-8">
              <h3 className="cursor-pointer hover:text-[#e94a6d]">
                <Link to={"/register"}> Register</Link>
              </h3>
              <h3 className="cursor-pointer hover:text-[#e94a6d]">
                {" "}
                <Link to={"/sign-in"}>Sign In</Link>
              </h3>
            </div>
          )}

          <span className="inline-block cursor-pointer" onClick={openCartMenu}>
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
              <path d="M16 10a4 4 0 0 1-8 0" />
              <path d="M3.103 6.034h17.794" />
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
            </svg>
          </span>
        </div>
        <span className="bg-[#e94a6d] text-[#fff] py-[0.05rem] px-[0.5rem] rounded-4xl absolute top-6 right-2.5 md:top-12 lg:top-17 lg:right-17">
          {cart.length}
        </span>
      </div>
      <form
        className="bg-[#fdf5f7] px-5 border-1 border-[#e94a6d] flex justify-between items-center lg:hidden"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search`);
        }}
      >
        <button className="inline-block cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#314158"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </button>
        <input
          className="text-[1.2rem] h-[3rem] w-full px-6 focus:outline-none"
          placeholder="Search for products"
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      {isNavMenuOpen && <Navmenu />}
      {isCartMenuOpen && <CartMenu />}

      <div className="hidden bg-[#fdf5f7] text-center lg:block">
        <ul className="text-[1rem] font-light tracking-wide flex justify-center items-center gap-10 py-3">
          {Categories.map((category, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onMouseOver={() => setCurrentHover(index)}
              onMouseOut={() => setCurrentHover(null)}
            >
              <Link to={`categories/${category.category}`}>
                {category.category}
              </Link>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={
                  currentHover === index
                    ? { width: "100%", opacity: 1 }
                    : { width: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-[2px] w-full bg-[#e94a6d] rounded"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import Navmenu from "./Navmenu";

function Navbar() {
  const [isNavmenuOpen, setIsNavmenuOpn] = useState(false);

  return (
    <nav>
      <div className="bg-[#070405] text-[#fff] text-center py-3 hidden lg:block">
        <p>Welcome to Debbie's Beauty Store</p>
      </div>

      <div className="flex justify-between items-center py-6 px-6 lg:px-20">
        <span
          className="block lg:hidden"
          onClick={() => setIsNavmenuOpn((prev) => !prev)}
        >
          {isNavmenuOpen ? (
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
          ) : (
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
          )}
        </span>

        <span className="cursor-pointer">
          <img src="/vite.svg" alt="" />
        </span>

        <div className="bg-[#f3f3f3] w-[50%] px-5 hidden rounded-3xl justify-between items-center lg:flex">
          <span className="inline-block cursor-pointer">
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
          </span>
          <input
            className="text-slate-700 text-[1.2rem] h-[3rem] w-full px-6 focus:outline-none"
            placeholder="Search products"
            type="text"
            name="search"
          />
        </div>

        <div className="flex justify-between items-center gap-10">
          <div className="text-[1.15rem] font-semibold hidden lg:flex justify-between items-center gap-8">
            <h3 className="cursor-pointer">Register</h3>
            <h3 className="cursor-pointer">Sign in</h3>
          </div>
          <span className="inline-block cursor-pointer">
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
        <span className="bg-[#070405] text-[#fff] py-[0.05rem] px-[0.5rem] rounded-4xl absolute top-2.5 right-2 lg:top-17 lg:right-17">
          {0}
        </span>
      </div>
      <div className="bg-[#f3f3f3] px-5 flex justify-between items-center lg:hidden">
        <span className="inline-block">
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
        </span>
        <input
          className="text-slate-700 text-[1.2rem] h-[3rem] w-full px-6 focus:outline-none"
          placeholder="Search products"
          type="text"
          name="search"
        />
      </div>
      {isNavmenuOpen && <Navmenu />}

      <div className="hidden text-center lg:block">
        <ul className="flex justify-center items-center gap-8 py-5">
          <li className="cursor-pointer">Makeup </li>
          <li className="cursor-pointer">Skincare (Face/Neck)</li>
          <li className="cursor-pointer">Bath & Body</li>
          <li className="cursor-pointer">Hair Care </li>
          <li className="cursor-pointer">Fragrance</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

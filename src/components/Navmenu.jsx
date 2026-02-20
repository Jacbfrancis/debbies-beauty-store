// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useNavMenu } from "../store/useNavMenuStore";
import { Categories } from "../constants/categories";
import { Link } from "react-router-dom";

function Navmenu() {
  const closeNavMenu = useNavMenu((state) => state.closeNavMenu);
  return (
    <motion.div
      initial={{ x: "-50vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0,
        duration: 0.3,
        ease: "easeInOut",
        type: "tween",
      }}
      className="w-full h-[100vh] fixed top-0 lg:hidden z-50"
      onClick={closeNavMenu}
    >
      <div
        className="bg-[#fff] w-[65%] h-[100vh] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="bg-[#e94a6d] py-2 w-[50%] block"></span>
        <span className="flex justify-end items-center pt-5 pb-2 px-5">
          <svg
            onClick={closeNavMenu}
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
        <ul className="flex flex-col gap-5 px-6 py-7">
          {Categories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/categories/${category.category}`}
                onClick={closeNavMenu}
              >
                {category.category}
              </Link>
            </li>
          ))}

          <hr />
          <li>
            <Link to={"/register"} onClick={closeNavMenu}>
              Register
            </Link>
          </li>
          <li>
            <Link to={"/sign-in"} onClick={closeNavMenu}>
              Sign In
            </Link>
          </li>
          <li>FAQs</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Navmenu;

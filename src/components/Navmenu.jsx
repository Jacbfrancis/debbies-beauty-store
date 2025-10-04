// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Navmenu({ setIsNavmenuOpn }) {
  return (
    <motion.div
      initial={{ x: "-50vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0, duration: 0.5, ease: "easeInOut", type: "tween" }}
      className="bg-[#fff] w-[60%] h-[100vh] shadow-lg absolute top-0 lg:hidden"
    >
      <span className="bg-[#e94a6d] text-[#fff] text-center py-2.5 block">
        <p>Welcome to Debbie's Beauty Store</p>
      </span>
      <span className="flex justify-end items-center pt-5 pb-2 px-5">
        <svg
          onClick={() => setIsNavmenuOpn(false)}
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
        <li className="flex justify-between items-center">
          Makeup <span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li className="flex justify-between items-center">
          Skin Care<span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li className="flex justify-between items-center">
          Bath & Body
          <span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li className="flex justify-between items-center">
          Hair Care
          <span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li>Fragrance</li>
        <hr />
        <li>Create Account</li>
        <li>Sign in</li>
        <li>FAQs</li>
      </ul>
    </motion.div>
  );
}

export default Navmenu;

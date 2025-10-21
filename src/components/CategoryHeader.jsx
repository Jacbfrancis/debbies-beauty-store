import { Link } from "react-router-dom";

function CategoryHeader() {
  return (
    <div className="bg-[url(/images/category_banner.webp)] bg-center bg-cover lg:bg-auto flex justify-center items-center">
      <div className="text-[#000] text-center px-6 py-7 h-[25vh] lg:px-20 lg:h-[40vh] lg:w-[50%] lg:py-30">
        <h2 className="text-[3rem] font-bold">{"Skin Care"}</h2>
        <div className="flex justify-center items-center gap-2">
          <Link to="/">
            <p>Home</p>{" "}
          </Link>
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>{" "}
          </span>
          <Link to="/">
            <p>Category</p>
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>{" "}
          </span>
          <p className="text-[#e94a6d] font-semibold">{"Skin Care"}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryHeader;

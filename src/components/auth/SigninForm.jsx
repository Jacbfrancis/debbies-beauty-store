import { Link } from "react-router-dom";

function SigninForm() {
  return (
    <div className="bg-[#fff] pt-3 pb-5 w-full rounded-t-3xl shadow-4xl md:w-[60%] md:rounded-t-none">
      <div className="px-5 pb-10 py-7 ">
        <span className="text-[1.2rem] font-bold flex justify-around items-center mb-10">
          <h3>
            <Link to={"/register"}>Register</Link>
          </h3>

          <h3 className="border-b-4 border-[#e94a6d] px-3 rounded-xl">
            <Link to={"/sign-in"}>Sign In</Link>
          </h3>
        </span>

        <form>
          <div className="flex flex-col justify-between items-center gap-5 md:px-5 md:gap-7">
            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3.5 px-5 flex justify-start items-center gap-3">
              <span>
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
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </span>
              <input
                type="e-mail"
                className="text-[1.2rem] outline-none"
                placeholder="Email Address"
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3.5 px-5 flex justify-start items-center gap-3">
              <span>
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
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type="password"
                className="text-[1.2rem] outline-none"
                placeholder="Password"
              />
            </div>
          </div>

          <p className="text-[#e94a6d] font-semibold text-right block mt-2 md:mt-8">
            <Link to={"/forgot-password"}>Forgot Password?</Link>
          </p>

          <div className="text-center mt-8 md:mt-10">
            <button className="bg-[#e94a6d] text-[#fff] font-extrabold w-[95%] rounded-2xl px-10 py-4">
              Sign In
            </button>
            <p className="font-light mt-4 md:mt-8">
              Don't have an account?{""}
              <Link to={"/register"} className="font-bold">
                Register.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;

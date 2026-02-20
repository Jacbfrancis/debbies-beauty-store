import { Link } from "react-router-dom";

function ForgotPasswordForm() {
  return (
    <div className="bg-[#fff] pt-3 pb-5 w-full rounded-t-3xl shadow-4xl md:w-[60%] md:rounded-t-none">
      <div className="px-5 py-7 pb-10">
        <div className="mb-10">
          <span className="text-[1.2rem] font-bold flex justify-between items-center">
            <Link to={"/sign-in"}>
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
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </Link>
            <h3 className="border-b-4 border-[#e94a6d] px-3 rounded-xl">
              Forgot Password
            </h3>

            <span className="block"></span>
          </span>
          <p className="text-[#4a4a4a] text-[0.9rem] text-center mt-8 w-[80%] mx-auto">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        <form>
          <div className="md:px-5">
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
          </div>

          <div className="text-center mt-10">
            <button className="bg-[#e94a6d] text-[#fff] font-extrabold w-[95%] rounded-2xl px-10 py-4">
              Reset Password
            </button>
            <p className="font-light mt-4">
              Back to{" "}
              <Link to={"/sign-in"} className="font-bold">
                Sign In.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;

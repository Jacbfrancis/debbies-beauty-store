import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="pb-30 pt-3 px-0 xl:px-20">
      <div className="bg-[#fff] rounded-t-3xl px-5 py-7 shadow-4xl">
        <span className="text-[1.2rem] font-bold flex justify-around items-center mb-10">
          <h3>
            <Link to={"/sign-in"}>Sign In</Link>
          </h3>
          <h3 className="border-b-4 border-[#e94a6d] px-3 rounded-xl">
            <Link to={"/register"}>Register</Link>
          </h3>
        </span>

        <form>
          <div className="flex flex-col justify-between items-center gap-5">
            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="text"
                className="text-[1.2rem] outline-none"
                placeholder="First Name"
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="text"
                className="text-[1.2rem] outline-none"
                placeholder="Last Name"
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="tel"
                className="text-[1.2rem] outline-none"
                placeholder="Mobile Number"
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="email"
                className="text-[1.2rem] outline-none"
                placeholder="Email Address"
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="password"
                className="text-[1.2rem] outline-none"
                placeholder="Create Password"
              />
            </div>
          </div>

          <span className="text-[#707070] text-[0.85rem] mt-5 block">
            By creating an account, you agree to our{" "}
            <Link to={"/"} className="font-bold underline">
              Privacy Policy
            </Link>{" "}
            and {""}
            <Link to={"/"} className="font-bold underline">
              Terms & conditions.
            </Link>{" "}
            By clicking the button below, you also consent to receive updates
            regarding our products, services, and organization.{" "}
          </span>

          <div className="text-center mt-8">
            <button className="bg-[#e94a6d] text-[#fff] font-extrabold w-[95%] rounded-2xl px-10 py-4">
              Register
            </button>
            <p className="font-light mt-4">
              Already have an account?{" "}
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
export default RegisterForm;

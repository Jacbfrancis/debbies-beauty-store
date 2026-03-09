import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LoadingSpinner from "../LoadingSpinner";
import getAuthErrorMessage from "../../utils/authErrors";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

function RegisterForm() {
  const navigate = useNavigate();

  // form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      if (!firstName || !lastName || !email || !mobileNumber || !password) {
        return setError("All fields are required");
      }
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber: mobileNumber,
        createdAt: serverTimestamp(),
        Orders: [],
      });
      navigate("/");
    } catch (error) {
      setError(getAuthErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#fff] pt-3 pb-5 w-full rounded-t-3xl shadow-4xl md:w-[60%] md:rounded-t-none">
      <div className="px-5 pb-10 py-7">
        <span className="text-[1.2rem] font-bold flex justify-around items-center mb-10">
          <h3 className="border-b-4 border-[#e94a6d] px-3 rounded-xl">
            <Link to={"/register"}>Register</Link>
          </h3>

          <h3>
            <Link to={"/sign-in"}>Sign In</Link>
          </h3>
        </span>

        <form onSubmit={handleRegister}>
          <div className="flex flex-col justify-between items-center gap-5 md:px-5">
            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="text"
                className="text-[1.2rem] outline-none"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="text"
                className="text-[1.2rem] outline-none"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="tel"
                className="text-[1.2rem] outline-none"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="email"
                className="text-[1.2rem] outline-none"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full border-2 border-[#d2d2d2] rounded-4xl py-3 px-5">
              <input
                type="password"
                className="text-[1.2rem] outline-none"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <span className="text-[#707070] text-[0.85rem] mt-5 block md:px-5">
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
            <button
              disabled={loading}
              onClick={handleRegister}
              className="bg-[#e94a6d] text-[#fff] font-extrabold w-[95%] rounded-2xl px-10 py-4"
            >
              {loading ? (
                <LoadingSpinner borderColor={"border-[#fff]"} />
              ) : (
                <span>Register</span>
              )}
            </button>
            {error && <span className="text-red-500 my-3 block">{error}</span>}
            <p className="font-light mt-5">
              Already have an account?{" "}
              <Link to={"/sign-in"} className="text-[#e94a6d] font-bold">
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

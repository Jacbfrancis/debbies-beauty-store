import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/auth/AuthHeader";
import SigninForm from "../../components/auth/SigninForm";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import LoadingPage from "../LoadingPage";

function SigninPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function unsubscribe() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          navigate("/");
        }
        setLoading(false);
      });
    }
    return unsubscribe();
  }, [navigate]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-[#f3f5f7] flex flex-col justify-center items-center md:flex-row">
      <AuthHeader />
      <SigninForm />
    </div>
  );
}

export default SigninPage;

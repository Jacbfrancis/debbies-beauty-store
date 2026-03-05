import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import AuthHeader from "../../components/auth/AuthHeader";
import RegisterForm from "../../components/auth/RegisterForm";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage";

function RegisterPage() {
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
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;

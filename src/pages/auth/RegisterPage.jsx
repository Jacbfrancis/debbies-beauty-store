import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import AuthHeader from "../../components/auth/AuthHeader";
import RegisterForm from "../../components/auth/RegisterForm";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    function unsubscribe() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          navigate("/profile");
        } else {
          console.log("no user found");
        }
      });
    }
    unsubscribe();
  }, [navigate]);

  return (
    <div className="bg-[#f3f5f7] flex flex-col justify-center items-center md:flex-row">
      <AuthHeader />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;

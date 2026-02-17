import AuthHeader from "../../components/auth/AuthHeader";
import RegisterForm from "../../components/auth/RegisterForm";

function RegisterPage() {
  return (
    <div className="bg-[#f3f5f7]">
      <AuthHeader />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;

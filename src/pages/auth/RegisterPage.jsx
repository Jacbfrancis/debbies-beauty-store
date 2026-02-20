import AuthHeader from "../../components/auth/AuthHeader";
import RegisterForm from "../../components/auth/RegisterForm";

function RegisterPage() {
  return (
    <div className="bg-[#f3f5f7] flex flex-col justify-center items-center md:flex-row">
      <AuthHeader />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;

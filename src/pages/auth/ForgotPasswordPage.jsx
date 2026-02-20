import AuthHeader from "../../components/auth/AuthHeader";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import SigninForm from "../../components/auth/SigninForm";

function ForgotPasswordPage() {
  return (
    <div className="bg-[#f3f5f7] flex flex-col justify-center items-center md:flex-row">
      <AuthHeader />
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPasswordPage;

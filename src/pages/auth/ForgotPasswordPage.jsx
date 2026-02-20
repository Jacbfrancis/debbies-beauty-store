import AuthHeader from "../../components/auth/AuthHeader";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import SigninForm from "../../components/auth/SigninForm";

function ForgotPasswordPage() {
  return (
    <div>
      <div className="bg-[#f3f5f7]">
        <AuthHeader />
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;

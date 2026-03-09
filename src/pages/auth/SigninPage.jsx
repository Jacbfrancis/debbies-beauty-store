import AuthHeader from "../../components/auth/AuthHeader";
import SigninForm from "../../components/auth/SigninForm";

function SigninPage() {
  return (
    <div className="bg-[#f3f5f7] flex flex-col justify-center items-center md:flex-row">
      <AuthHeader />
      <SigninForm />
    </div>
  );
}

export default SigninPage;

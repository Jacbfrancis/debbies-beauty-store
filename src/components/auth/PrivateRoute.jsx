import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import LoadingPage from "../../pages/LoadingPage";

export default function PrivateRoute() {
  const authLoading = useAuthStore((state) => state.authLoading);
  const user = useAuthStore((state) => state.user);

  if (authLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <Navigate to={"/sign-in"} replace />;
  }

  return <Outlet />;
}

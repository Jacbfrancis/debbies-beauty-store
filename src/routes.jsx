import MainLayout from "./components/MainLayout";
import Homepage from "./pages/Homepage";
import CategoriesPage from "./pages/CategoriesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import SigninPage from "./pages/auth/SigninPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicRoute from "./components/auth/PublicRoute";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminLayout from "./components/admin/AdminLayout";
import CustomersPage from "./pages/admin/CustomersPage";
import RootLayout from "./components/RootLayout";
import ProductsPage from "./pages/admin/ProductsPage";
import CustomerProfilePage from "./pages/admin/customerProfilePage";

export const routes = [
  {
    element: <RootLayout />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "admin/dashboard", element: <DashboardPage /> },
          { path: "/admin/customers", element: <CustomersPage /> },
          { path: "/admin/customer/:id", element: <CustomerProfilePage /> },
          { path: "/admin/products", element: <ProductsPage /> },
        ],
      },

      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <Homepage /> },
          { path: "/categories/:category", element: <CategoriesPage /> },
          { path: "/search", element: <SearchResultsPage /> },
          { path: "/product/:slug", element: <ProductDetailsPage /> },
          { path: "/cart", element: <CartPage /> },
          {
            element: <PublicRoute />,
            children: [
              { path: "/register", element: <RegisterPage /> },
              { path: "/sign-in", element: <SigninPage /> },
            ],
          },
          { path: "/forgot-password", element: <ForgotPasswordPage /> },
          {
            element: <PrivateRoute />,
            children: [
              { path: "/profile", element: <ProfilePage /> },
              { path: "/orders", element: <OrdersPage /> },
              { path: "/checkout", element: <CheckOutPage /> },
            ],
          },
        ],
      },
    ],
  },
];

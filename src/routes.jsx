import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import Homepage from "./pages/Homepage";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/footer", element: <Footer /> },
    ],
  },
];

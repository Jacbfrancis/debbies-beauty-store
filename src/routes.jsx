import MainLayout from "./components/MainLayout";
import Homepage from "./pages/Homepage";
import CategoriesPage from "./pages/CategoriesPage";
import SearchResultsPage from "./pages/SearchResultsPage";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/categories/:category", element: <CategoriesPage /> },
      { path: "/search", element: <SearchResultsPage /> },
    ],
  },
];

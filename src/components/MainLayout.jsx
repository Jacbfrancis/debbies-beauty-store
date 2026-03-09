import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useQuickView } from "../store/useQuickViewStore";
import ScrollToTop from "./ScrollToTop";
import { useNavMenu } from "../store/useNavMenuStore";
import { useCartMenu } from "../store/useCartMenuStore";
import { useShippingModal } from "../store/useShippingModal";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useProducts } from "../store/useProductsStore";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../pages/LoadingPage";

function MainLayout() {
  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);
  const isNavMenuOpen = useNavMenu((state) => state.isNavMenuOpen);
  const isCartMenuOpen = useCartMenu((state) => state.isCartMenuOpen);
  const isShippingModalOpen = useShippingModal(
    (state) => state.isShippingModalOpen
  );

  const setUser = useAuthStore((state) => state.setUser);
  const setProducts = useProducts((state) => state.setProducts);
  const setAuthLoading = useAuthStore((state) => state.setAuthLoading);
  const setProductsLoading = useProducts((state) => state.setProductsLoading);
  const setProductsError = useProducts((state) => state.setProductsError);
  const productsError = useProducts((state) => state.productsError);
  const productsLoading = useProducts((state) => state.productsLoading);
  const authLoading = useAuthStore((state) => state.authLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setProductsLoading(false);
      },
      (error) => {
        console.error(error.message);
        setProductsError(true);
        setProductsLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  if (productsError) {
    return <ErrorPage />;
  }

  if (productsLoading || authLoading) {
    return <LoadingPage />;
  }

  return (
    <div
      className={
        isQuickViewOpen ||
        isNavMenuOpen ||
        isCartMenuOpen ||
        isShippingModalOpen
          ? "overflow-y-hidden h-[100vh]"
          : ""
      }
    >
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;

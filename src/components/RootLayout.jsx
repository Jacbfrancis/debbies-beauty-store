import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { useAuthStore } from "../store/useAuthStore";
import { collection, onSnapshot } from "firebase/firestore";
import { useProducts } from "../store/useProductsStore";

export default function RootLayout() {
  const setUser = useAuthStore((state) => state.setUser);
  const setAuthLoading = useAuthStore((state) => state.setAuthLoading);
  const setProducts = useProducts((state) => state.setProducts);
  const setProductsLoading = useProducts((state) => state.setProductsLoading);
  const setProductsError = useProducts((state) => state.setProductsError);

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

  return <Outlet />;
}

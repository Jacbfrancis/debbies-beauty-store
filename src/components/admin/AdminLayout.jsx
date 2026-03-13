//import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import AdminSideBar from "./AdminSideBar";
import { useUsersStore } from "../../store/useUsersStore";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import LoadingPage from "../../pages/LoadingPage";

export default function AdminLayout() {
  const setUsers = useUsersStore((state) => state.setUsers);
  const setUsersLoading = useUsersStore((state) => state.setUsersLoading);
  const usersLoading = useUsersStore((state) => state.usersLoading);

  useEffect(() => {
    const unsubscribe = () => {
      onSnapshot(collection(db, "users"), (snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setUsersLoading(false);
      });
    };

    return unsubscribe;
  }, []);

  if (usersLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-gray-50">
      <DashboardNavbar />
      <div className="md:flex justify-start items-start">
        <AdminSideBar />
        <Outlet />
      </div>
    </div>
  );
}

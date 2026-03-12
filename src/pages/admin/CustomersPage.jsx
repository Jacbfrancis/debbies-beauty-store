import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import LoadingPage from "../LoadingPage";

export default function CustomersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return getUsers;
  }, []);

  if (users.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div className="px-6 md:w-[75%]">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-[1.3rem] font-bold">Customers</h2>

        <span className="text-[#4e4e4e] text-[0.9rem] font-light flex justify-center items-center gap-2">
          <p>
            <Link to={"/admin/dashboard"}>Admin</Link>
          </p>{" "}
          {">"}{" "}
          <p>
            <Link to={"/admin/customers"}>Customers</Link>
          </p>
        </span>
      </div>

      <div className="bg-white w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Customers</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage and view your registered users.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                  Customer
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                  Email Address
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                  Phone Number
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100 text-right">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#fdf5f7] transition-colors group cursor-default"
                >
                  {/* Name with Avatar Initials */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#fdf5f7] text-[#e94a6d] flex items-center justify-center font-bold text-xs">
                        {user?.firstName?.[0]}
                        {user?.lastName?.[0]}
                      </div>
                      <span className="font-medium text-gray-900">
                        {user?.firstName} {user?.lastName}
                      </span>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {user?.email}
                  </td>

                  {/* Number */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                      {user?.mobileNumber || "N/A"}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500 text-sm">
                    {user?.createdAt?.toDate().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

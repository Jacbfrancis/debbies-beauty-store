import { useParams } from "react-router-dom";
import { useUsersStore } from "../../store/useUsersStore";

export default function CustomerProfilePage() {
  const { id } = useParams();
  const users = useUsersStore((state) => state.users);

  const user = users?.find((u) => u.id === id);

  const statusStyles = {
    Delivered: "bg-green-50 text-green-700",
    "In Transit": "bg-amber-50 text-amber-700",
    Cancelled: "bg-red-50 text-red-600",
    Pending: "bg-gray-100 text-gray-600",
  };

  if (!user) {
    return (
      <div className="px-6 md:w-[75%]">
        <p className="text-gray-500 mt-10">Customer not found.</p>
      </div>
    );
  }

  return (
    <div className="px-6 md:w-[75%]">
      <h2 className="text-[1.3rem] font-bold text-center py-6">
        Customer Profile
      </h2>

      <div className="flex flex-col gap-4">
        {/* Profile Card */}
        <div className="bg-white w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">
              Personal Information
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Account details for this customer.
            </p>
          </div>

          <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                First Name
              </p>
              <p className="text-sm font-medium text-gray-900">
                {user.firstName}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                Last Name
              </p>
              <p className="text-sm font-medium text-gray-900">
                {user.lastName}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                Phone Number
              </p>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                {user.mobileNumber || "N/A"}
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                Date Joined
              </p>
              <p className="text-sm font-medium text-gray-900">
                {user?.createdAt?.toDate().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                Email Address
              </p>
              <p className="text-sm font-medium text-gray-900">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Order History</h2>
            <p className="text-sm text-gray-500 mt-1">
              {user.orders.length} order{user.orders.length !== 1 ? "s" : ""}{" "}
              placed by this customer.
            </p>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#fdf5f7]">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                    Date
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                    Items
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100 text-right">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {user.orders.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-sm text-gray-400"
                    >
                      No orders found for this customer.
                    </td>
                  </tr>
                ) : (
                  user.orders.map((order, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#fdf5f7] transition-colors cursor-default"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                          <span className="font-medium text-gray-900 text-sm">
                            {order.id}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order?.createdAt
                          ?.toDate()
                          .toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {order.items?.length ?? 0} item
                        {order.items?.length !== 1 ? "s" : ""}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                            statusStyles[order.status] ??
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                        ${order.total?.toFixed(2)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

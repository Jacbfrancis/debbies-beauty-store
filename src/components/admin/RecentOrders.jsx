import { Link } from "react-router-dom";

export default function RecentOrders() {
  const getStatusStyles = (status) => {
    const s = status?.toLowerCase();
    if (s === "completed")
      return "bg-green-100 text-green-700 border-green-200";
    if (s === "pending") return "bg-amber-100 text-amber-700 border-amber-200";
    if (s === "cancelled") return "bg-red-100 text-red-700 border-red-200";
    return "bg-gray-100 text-gray-700 border-gray-200";
  };

  const orders = [
    {
      orderId: "323538",
      customerName: "Deborah Boniface",
      email: "debbiesbeautystore.web@gmail.com.com",
      amount: 214000,
      status: "completed",
    },
    {
      orderId: "323538",
      customerName: "Deborah Boniface",
      email: "debbiesbeautystore.web@gmail.com.com",
      amount: 214000,
      status: "completed",
    },
  ];

  return (
    <div className="bg-white w-[90%] mx-auto rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[500px] md:w-1/2 md:h-[45vh]">
      {/* Header */}
      <div className="p-5 border-b border-gray-100 bg-white">
        <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
        <p className="text-sm text-gray-500">
          Real-time update of latest transactions
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto overflow-y-auto no-scrollbar flex-1">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="sticky top-0 bg-gray-50 z-10">
            <tr>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                Order ID
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                Customer
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                Email
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                Amount
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.slice(0, 10).map((order, index) => (
              <tr
                key={index}
                className="hover:bg-[#fdf5f7] transition-colors group"
              >
                {/* Order ID */}
                <td className="px-5 py-4 whitespace-nowrap">
                  <span className="text-sm font-bold text-[#e94a6d]">
                    #{order?.orderId}
                  </span>
                </td>

                {/* Name */}
                <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order?.customerName}
                </td>

                {/* Email */}
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order?.email}
                </td>

                {/* Amount */}
                <td className="px-5 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  ₦ {Number(order?.amount).toLocaleString()}
                </td>

                {/* Status Badge */}
                <td className="px-5 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold border ${getStatusStyles(
                      order?.status
                    )}`}
                  >
                    {order?.status?.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Footer / Pagination Placeholder */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <Link
          to={"/admin/orders"}
          className="text-sm font-medium text-[#e94a6d]"
        >
          View all orders
        </Link>
      </div>
    </div>
  );
}

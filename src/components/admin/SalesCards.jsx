export default function SalesCards() {
  return (
    <div className="flex items-center justify-center py-8 w-full">
      <div className="grid grid-cols-1 gap-4 w-[90%] md:grid-cols-3">
        {/* Customers */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full">
          <div className="bg-gray-50 rounded-xl w-15 h-15 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#363636"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          </div>
          <p className="text-gray-600 text-md mb-1">Customers</p>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-900 tracking-tight">
              12
            </span>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full">
          <div className="bg-gray-50 rounded-xl w-15 h-15 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#363636"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
          <p className="text-gray-600 text-md mb-1">Orders</p>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-900 tracking-tight">
              6
            </span>
          </div>
        </div>

        {/* Products */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full">
          <div className="bg-gray-50 rounded-xl w-15 h-15 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#363636"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22V12" />
              <path d="M20.27 18.27 22 20" />
              <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" />
              <path d="M3.29 7 12 12l8.71-5" />
              <path d="m7.5 4.27 8.997 5.148" />
              <circle cx="18.5" cy="16.5" r="2.5" />
            </svg>
          </div>
          <p className="text-gray-600 text-md mb-1">Products</p>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-900 tracking-tight">
              30
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function CustomerChart() {
  const data = [
    {
      month: "Jan",
      customers: 4,
    },
    {
      month: "Feb",
      customers: 8,
    },
    {
      month: "Mar",
      customers: 5,
    },
    {
      month: "Apr",
      customers: 13,
    },
    {
      month: "May",
      customers: 2,
    },
    {
      month: "Jun",
      customers: 17,
    },
    {
      month: "Jul",
      customers: 22,
    },
    {
      month: "Aug",
      customers: null,
    },
    {
      month: "Sept",
      customers: null,
    },
    {
      month: "Oct",
      customers: null,
    },
    {
      month: "Nov",
      customers: null,
    },
    {
      month: "Dec",
      customers: null,
    },
  ];

  return (
    <div className="bg-white w-[90%] mx-auto mb-10 px-4 rounded-3xl shadow-lg">
      <h2 className="text-[1.3rem] font-bold pt-6 px-4">Monthly Customers</h2>
      <div className="w-full overflow-scroll h-80 p-4">
        <ResponsiveContainer width="250%" height="100%">
          <BarChart data={data} barCategoryGap={20}>
            <Bar dataKey="customers" fill="#e94a6d" radius={[6, 6, 0, 0]} />
            <XAxis dataKey="month" tick={{ fill: "#000", fontSize: "12" }} />
            <CartesianGrid strokeDasharray={"1 3"} />
            <Tooltip cursor={{ fill: "transparent" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

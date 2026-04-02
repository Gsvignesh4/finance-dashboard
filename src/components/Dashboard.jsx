import { transactions } from "../data/transactions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

function Dashboard() {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const chartData = transactions.map(t => ({
    date: t.date,
    amount: t.amount
  }));

  // ✅ PIE DATA
  const categoryData = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryData).map(key => ({
    name: key,
    value: categoryData[key]
  }));

  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

  return (
    <>
      <h2>Dashboard</h2>

      {/* Cards */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow">Balance: ₹{balance}</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow text-success">Income: ₹{income}</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow text-danger">Expense: ₹{expense}</div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-5">
        <h4>Spending Trend</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#6366f1" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ PIE CHART */}
      <div className="mt-5">
        <h4>Category Breakdown</h4>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={100}>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Dashboard;
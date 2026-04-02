function Sidebar({ setPage }) {
  return (
    <div
      className="bg-dark text-white p-4"
      style={{ width: "240px", minHeight: "100vh" }}
    >
      <h4 className="text-center mb-4">FinanceIQ</h4>

      <ul className="nav flex-column">
        <li className="nav-item mb-3" onClick={() => setPage("dashboard")}>
          Dashboard
        </li>
        <li className="nav-item mb-3" onClick={() => setPage("transactions")}>
          Transactions
        </li>
        <li className="nav-item" onClick={() => setPage("insights")}>
          Insights
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
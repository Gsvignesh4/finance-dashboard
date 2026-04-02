import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

function App() {
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("viewer");

  return (
    <div className="d-flex">

      <Sidebar setPage={setPage} />

      <div className="container-fluid p-4">

        {/* Role Selector */}
        <div className="d-flex justify-content-end mb-3">
          <select
            className="form-select w-auto"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Page Rendering */}
        {page === "dashboard" && <Dashboard />}
        {page === "transactions" && <Transactions role={role} />}
        {page === "insights" && <Insights />}

      </div>
    </div>
  );
}

export default App;
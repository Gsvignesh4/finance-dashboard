import { transactions } from "../data/transactions";

function Transactions({ role }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2>Transactions</h2>

        {role === "admin" && (
          <button className="btn btn-primary">+ Add Transaction</button>
        )}
      </div>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td className={t.type === "income" ? "text-success" : "text-danger"}>
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Transactions;
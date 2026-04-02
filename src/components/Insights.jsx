import { transactions } from "../data/transactions";

function Insights() {
  const categoryTotals = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return (
    <>
      <h2>Insights</h2>

      <div className="card p-3 mt-4 shadow">
        <h5>Highest Spending Category</h5>
        <h4 className="text-danger">{highest}</h4>
      </div>
    </>
  );
}

export default Insights;
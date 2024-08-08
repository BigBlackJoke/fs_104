import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function TransactionHistoryList({ transactions }) {
    return (
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
        {transactions.map(trans => {
            return (
                <td key={trans.id}>
                    <TransactionHistory transaction = {trans} />
                </td>
            )
        })}
    </tr>
  </tbody>
</table>

    )
}
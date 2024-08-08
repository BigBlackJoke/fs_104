export default function TransactionHistory({transaction: {type = 'unknown', amount = 0, currency = 'unknown'}}) {
    return (
        <div>
            <p>{type}</p>
            <p>{amount}</p>
            <p>{currency}</p>
        </div>
    )
}
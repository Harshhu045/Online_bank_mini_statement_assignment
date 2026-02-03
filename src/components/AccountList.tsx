import { accounts } from "../store/accounts";

export default function AccountList() {
    const list = Object.values(accounts);

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Accounts</h2>
            <table className="w-full text-sm">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Name</th>
                        <th>Balance</th>
                        <th>KYC</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(acc => (
                        <tr key={acc.accountNo}>
                            <td>{acc.accountNo}</td>
                            <td>{acc.holderName}</td>
                            <td>₹{acc.balance}</td>
                            <td>{acc.isKYCVerified ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

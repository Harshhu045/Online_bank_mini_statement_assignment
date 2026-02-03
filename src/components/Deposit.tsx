import { useState } from "react";
import { deposit } from "../core/bank";
import { useToast } from "../store/toast";

export default function Deposit({ onLog }: any) {
    const [acc, setAcc] = useState("");
    const [amt, setAmt] = useState(0);
    const { showToast } = useToast();

    const handle = () => {
        try {
            const msg = deposit(acc, amt);
            onLog(msg);
            showToast("Deposit successful", "success");
        } catch (e: any) {
            onLog(e.message);
            showToast(e.message, "error");
        }
    };

    return (
        <div className="bg-white p-4 rounded shadow space-y-2">
            <h2 className="font-semibold">Deposit</h2>
            <input className="border p-2 w-full" placeholder="Account No" onChange={e => setAcc(e.target.value)} />
            <input type="number" className="border p-2 w-full" placeholder="Amount" onChange={e => setAmt(+e.target.value)} />
            <button onClick={handle} className="bg-green-600 text-white px-4 py-2 rounded">Deposit</button>
        </div>
    );
}

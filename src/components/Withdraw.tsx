import { useState } from "react";
import { withdraw } from "../core/bank";

export default function Withdraw({ onLog }: any) {
  const [acc, setAcc] = useState("");
  const [amt, setAmt] = useState(0);

  const handle = () => {
    try {
      onLog(withdraw(acc, amt));
    } catch (e: any) {
      onLog(e.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="font-semibold">Withdraw</h2>
      <input className="border p-2 w-full" placeholder="Account No" onChange={e => setAcc(e.target.value)} />
      <input type="number" className="border p-2 w-full" placeholder="Amount" onChange={e => setAmt(+e.target.value)} />
      <button onClick={handle} className="bg-red-600 text-white px-4 py-2 rounded">Withdraw</button>
    </div>
  );
}

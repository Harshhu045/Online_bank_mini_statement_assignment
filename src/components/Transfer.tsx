import { useState } from "react";
import { transferMoney } from "../core/bank";

export default function Transfer({ onLog }: any) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amt, setAmt] = useState(0);

  const handle = () => {
    try {
      onLog(transferMoney(from, to, amt));
    } catch (e: any) {
      onLog(e.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="font-semibold">Transfer</h2>
      <input className="border p-2 w-full" placeholder="Sender Account" onChange={e => setFrom(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Receiver Account" onChange={e => setTo(e.target.value)} />
      <input type="number" className="border p-2 w-full" placeholder="Amount" onChange={e => setAmt(+e.target.value)} />
      <button onClick={handle} className="bg-purple-600 text-white px-4 py-2 rounded">Transfer</button>
    </div>
  );
}

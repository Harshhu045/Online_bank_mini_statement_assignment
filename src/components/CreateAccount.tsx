import { useState } from "react";
import { createAccount } from "../core/bank";

type Props = {
  onLog: (msg: string) => void;
};

export default function CreateAccount({ onLog }: Props) {
  const [accountNo, setAccountNo] = useState("");
  const [holderName, setHolderName] = useState("");
  const [balance, setBalance] = useState(0);
  const [kyc, setKyc] = useState(false);

  const handleCreate = () => {
    try {
      const msg = createAccount(
        accountNo,
        holderName,
        balance,
        kyc
      );
      onLog(msg);
    } catch (e: any) {
      onLog(e.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="font-semibold">Create Account</h2>

      <input
        className="border p-2 w-full"
        placeholder="Account No"
        onChange={(e) => setAccountNo(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Holder Name"
        onChange={(e) => setHolderName(e.target.value)}
      />
      <input
        type="number"
        className="border p-2 w-full"
        placeholder="Initial Balance"
        onChange={(e) => setBalance(Number(e.target.value))}
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={(e) => setKyc(e.target.checked)}
        />
        KYC Verified
      </label>

      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </div>
  );
}

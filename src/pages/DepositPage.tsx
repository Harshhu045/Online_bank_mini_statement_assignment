import Deposit from "../components/Deposit";
import { useLogs } from "../store/logs";

export default function DepositPage() {
  const { log } = useLogs();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Deposit Money</h2>
      <Deposit onLog={log} />
    </>
  );
}

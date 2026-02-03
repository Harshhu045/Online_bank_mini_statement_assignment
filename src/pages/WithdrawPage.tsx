import Withdraw from "../components/Withdraw";
import { useLogs } from "../store/logs";

export default function WithdrawPage() {
  const { log } = useLogs();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Withdraw Money</h2>
      <Withdraw onLog={log} />
    </>
  );
}

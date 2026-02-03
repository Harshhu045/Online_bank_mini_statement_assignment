import Transfer from "../components/Transfer";
import { useLogs } from "../store/logs";

export default function TransferPage() {
  const { log } = useLogs();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Transfer Money</h2>
      <Transfer onLog={log} />
    </>
  );
}

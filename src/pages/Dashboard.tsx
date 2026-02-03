import AccountList from "../components/AccountList";
import OutputPanel from "../components/OutputPanel";
import { useLogs } from "../store/logs";

export default function Dashboard() {
  const { logs } = useLogs();

  return (
    <>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <AccountList />
      <OutputPanel logs={logs} />
    </>
  );
}

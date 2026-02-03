import CreateAccount from "../components/CreateAccount";
import { useLogs } from "../store/logs";

export default function CreateAccountPage() {
  const { log } = useLogs();
  return (
    <>
      <h2 className="text-2xl font-semibold">Create Account</h2>
      <CreateAccount onLog={log} />
    </>
  );
}

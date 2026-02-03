import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CreateAccountPage from "./pages/CreateAccountPage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";
import TransferPage from "./pages/TransferPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/transfer" element={<TransferPage />} />
      </Routes>
    </Layout>
  );
}

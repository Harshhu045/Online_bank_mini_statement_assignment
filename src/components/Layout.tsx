import { NavLink } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 space-y-6">
        <h1 className="text-xl font-bold">🏦 MiniBank</h1>

        <nav className="space-y-2">
          {[
            ["/", "Dashboard"],
            ["/create-account", "Create Account"],
            ["/deposit", "Deposit"],
            ["/withdraw", "Withdraw"],
            ["/transfer", "Transfer"],
          ].map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 space-y-6">
        {children}
      </main>
    </div>
  );
}

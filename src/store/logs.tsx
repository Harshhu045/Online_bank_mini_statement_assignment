import { createContext, useContext, useState } from "react";

const LogContext = createContext<any>(null);

export function LogProvider({ children }: any) {
  const [logs, setLogs] = useState<string[]>([]);

  const log = (msg: string) =>
    setLogs(prev => [`> ${msg}`, ...prev]);

  return (
    <LogContext.Provider value={{ logs, log }}>
      {children}
    </LogContext.Provider>
  );
}

export const useLogs = () => useContext(LogContext);

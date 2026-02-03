import { createContext, useContext, useState } from "react";

type ToastType = "success" | "error";

type Toast = {
  message: string;
  type: ToastType;
};

const ToastContext = createContext<any>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: ToastType = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);

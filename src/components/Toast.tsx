import { useToast } from "../store/toast";

export default function Toast() {
  const { toast } = useToast();

  if (!toast) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={`px-6 py-3 rounded shadow-lg text-white transition-all
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
        `}
      >
        {toast.message}
      </div>
    </div>
  );
}

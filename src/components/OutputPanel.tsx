type Props = {
  logs: string[];
};

export default function OutputPanel({ logs }: Props) {
  return (
    <div className="bg-black text-green-400 p-4 rounded h-40 overflow-auto text-sm">
      {logs.map((log, i) => (
        <div key={i}>{log}</div>
      ))}
    </div>
  );
}

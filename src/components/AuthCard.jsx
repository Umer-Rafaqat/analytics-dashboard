
export default function AuthCard({ children }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-auto bg-surface p-6">
      <div
        className="relative shrink-0 rounded-[30px] bg-white"
        style={{ width: 1279, height: 824, boxShadow: '0px 0px 4px 0px #00000026' }}
      >
        {children}
      </div>
    </div>
  );
}

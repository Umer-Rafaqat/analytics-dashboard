import { Search } from 'lucide-react';

export default function Topbar({ title }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-[206px]">
      <h1 className="text-2xl font-bold text-brand-600">{title}</h1>
      <div className="relative w-full max-w-[400px]">
        <input
          type="text"
          placeholder="Search anything here..."
          className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-brand-400"
        />
        <Search className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}

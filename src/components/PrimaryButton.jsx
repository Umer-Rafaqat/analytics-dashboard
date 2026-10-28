export default function PrimaryButton({ children, type = 'submit', loading = false, disabled, ...rest }) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className="flex w-full items-center justify-center rounded-lg bg-[#6E39CB] py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      {...rest}
    >
      {loading ? 'Please wait...' : children}
    </button>
  );
}

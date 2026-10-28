
export default function InputField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  trailingAction,
}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-800">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-lg border bg-surface px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 ${
            error ? 'border-red-400' : 'border-gray-200'
          }`}
        />
        {trailingAction && (
          <div className="absolute inset-y-0 right-3 flex items-center">{trailingAction}</div>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

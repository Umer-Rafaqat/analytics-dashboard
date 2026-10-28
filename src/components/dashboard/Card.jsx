export default function Card({ children, className = '', style }) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 ${className}`} style={style}>
      {children}
    </div>
  );
}

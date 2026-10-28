
export default function ProfileCard({ children, className = '', style = {} }) {
  return (
    <div
      className={`rounded-lg bg-white ${className}`}
      style={{ boxShadow: '0px 0px 4px 0px #00000026', ...style }}
    >
      {children}
    </div>
  );
}

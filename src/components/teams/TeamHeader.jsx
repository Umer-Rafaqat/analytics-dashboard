
export default function TeamHeader() {
  return (
    <div className="border-b border-gray-100 pb-6" style={{ marginTop: 50 }}>
      <h1
        className="text-gray-900"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 700,
          fontSize: 28.83,
          lineHeight: '100%',
          letterSpacing: '0%',
          paddingTop: 50,
        }}
      >
        Team management
      </h1>
      <p
        className="mt-3 text-[#89868D]"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 400,
          fontSize: 14.22,
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
      >
        Manage your team members and their account permissions here.
      </p>
    </div>
  );
}

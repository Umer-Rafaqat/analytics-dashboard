import { LineChart, Line, ResponsiveContainer } from 'recharts';
import ProfileCard from './ProfileCard.jsx';

export default function StatCard({ stat }) {
  return (
    <ProfileCard className="flex items-center gap-4 p-5" style={{ width: 326, height: 130 }}>
      <div className="h-14 w-20 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stat.data}>
            <Line type="monotone" dataKey="v" stroke={stat.lineColor} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          <span className={`text-sm font-medium ${stat.up ?  'text-[#6E39CB]' : 'text-red-500'}`}>
            {stat.delta}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
      </div>
    </ProfileCard>
  );
}

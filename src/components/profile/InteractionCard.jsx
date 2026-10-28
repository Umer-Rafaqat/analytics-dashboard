import { HelpCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import ProfileCard from './ProfileCard.jsx';
import { interaction } from '../../data/profileData.js';

export default function InteractionCard() {
  return (
    <ProfileCard className="p-6 w-[562px]" style={{ height: 279 }}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">Interaction</p>
        <HelpCircle className="h-5 w-5 text-gray-300" />
      </div>

      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={interaction} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#F0F0F3" />
            <XAxis dataKey="day" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              ticks={[0, 50, 150, 250]}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={32}
            />
            <Line
              type="monotone"
              dataKey="a"
              stroke="#F94D4D"
              strokeWidth={2}
              strokeDasharray="5 4"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="b"
              stroke="#6E39CB"
              strokeWidth={2}
              strokeDasharray="5 4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ProfileCard>
  );
}

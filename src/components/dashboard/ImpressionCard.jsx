import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import Card from './Card.jsx';
import { impression } from '../../data/dashboardData.js';

export default function ImpressionCard() {
  return (
    <Card className="h-[287px] w-[270px] rounded-lg flex flex-col">
      <p className="text-base font-semibold text-gray-800">Impression</p>
      <div className="mb-4 h-[24px] w-[97px] border-t-[1.09px] border-[#F4F5F9]" />
      <div className="mt-4 flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={impression}>
            <CartesianGrid horizontal vertical={false} stroke="#F4F5F9" strokeWidth={1.09} />
            <YAxis
              ticks={[0, 10, 20]}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={24}
            />
            <XAxis dataKey="day" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={28}>
              {impression.map((entry) => (
                <Cell key={entry.day} fill={entry.day === 'Wed' ? '#6E39CB' : '#DCC9FB'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

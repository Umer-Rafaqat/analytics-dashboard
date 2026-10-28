import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import ProfileCard from './ProfileCard.jsx';
import { bestTimeDays } from '../../data/profileData.js';

export default function BestTimeCard() {
  const [mode, setMode] = useState('Days');

  return (
    <ProfileCard className="p-6" style={{ width: 422, height: 279 }}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">Best time</p>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button
            type="button"
            onClick={() => setMode('Days')}
            style={{ color: mode === 'Days' ? '#6E39CB' : '#BE99FE' }}
          >
            Days
          </button>
          <button
            type="button"
            onClick={() => setMode('Hours')}
            style={{ color: mode === 'Hours' ? '#6E39CB' : '#BE99FE' }}
          >
            Hours
          </button>
          <HelpCircle className="h-5 w-5 text-gray-300" />
        </div>
      </div>

      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={bestTimeDays}>
            <XAxis dataKey="label" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={28}>
              {bestTimeDays.map((entry) => (
                <Cell key={entry.label} fill={entry.highlight ? '#6E39CB' : '#D3BBFE'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ProfileCard>
  );
}

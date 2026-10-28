import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import ProfileCard from './ProfileCard.jsx';
import { ageRange } from '../../data/profileData.js';

const FILTERS = ['All', 'Men', 'Women'];

export default function AgeRangeCard() {
  const [filter, setFilter] = useState('All');

  return (
    <ProfileCard className="p-6" style={{ width: 585, height: 338 }}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">Age range</p>
        <div className="flex items-center gap-4 text-sm font-medium">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              style={{ color: filter === f ? '#6E39CB' : '#BE99FE' }}
            >
              {f}
            </button>
          ))}
          <HelpCircle className="h-5 w-5 text-gray-300" />
        </div>
      </div>

      <div className="h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ageRange} barGap={4}>
            <XAxis dataKey="label" tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} tickLine={false} />
            {(filter === 'All' || filter === 'Men') && (
              <Bar dataKey="men" fill="#6E39CB" radius={[4, 4, 4, 4]} barSize={10} />
            )}
            {(filter === 'All' || filter === 'Women') && (
              <Bar dataKey="women" fill="#D3BBFE" radius={[4, 4, 4, 4]} barSize={10} />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ProfileCard>
  );
}

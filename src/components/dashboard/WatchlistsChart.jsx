import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceDot } from 'recharts';
import Card from './Card.jsx';
import { watchlists } from '../../data/analyticsData.js';

const RANGES = ['Day', 'Week', 'Month'];
const peak = watchlists.reduce((max, d) => (d.a > max.a ? d : max), watchlists[0]);

export default function WatchlistsChart() {
  const [range, setRange] = useState('Day');

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between ">
        <p className="text-base font-semibold text-gray-800">Watchlists</p>
        <div className="flex rounded-lg bg-gray-50 p-1">
          {RANGES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                range === r ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={watchlists} margin={{ top: 30, right: 10, left: 61, bottom: 0 }}>
            <defs>
              <linearGradient id="watchA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="watchB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F0F0F3" />
            <XAxis dataKey="day" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} width={32} />
            <Tooltip />
            <Area type="monotone" dataKey="a" stroke="#22C55E" strokeWidth={3} fill="url(#watchA)" />
            <Area type="monotone" dataKey="b" stroke="#F59E0B" strokeWidth={3} fill="url(#watchB)" />
            <ReferenceDot
              x={peak.day}
              y={peak.a}
              r={5}
              fill="#fff"
              stroke="#22C55E"
              strokeWidth={2}
              label={{ value: peak.a, position: 'top', fill: '#22C55E', fontSize: 12 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

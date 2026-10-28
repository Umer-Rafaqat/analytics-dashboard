import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceDot, ReferenceLine } from 'recharts';
import ProfileCard from './ProfileCard.jsx';
import { followers } from '../../data/profileData.js';

const peak = followers.find((d) => d.peak);


const BREAKPOINTS = [0, 50000, 100000, 500000];
const LABELS = ['0', '50k', '100k', '500k'];

function valueToPos(v) {
  for (let i = 0; i < BREAKPOINTS.length - 1; i++) {
    const lo = BREAKPOINTS[i];
    const hi = BREAKPOINTS[i + 1];
    if (v <= hi) return i + (v - lo) / (hi - lo);
  }
  return BREAKPOINTS.length - 1;
}

const chartData = followers.map((d) => ({
  ...d,
  incomePos: valueToPos(d.income),
  outcomePos: valueToPos(d.outcome),
}));

export default function FollowersCard() {
  return (
    <ProfileCard className="p-6 w-[100%]" style={{  height: 320 }}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">Followers</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1.5 text-red-500">
            <span className="h-2 w-2 rounded-full bg-red-500" /> Income
          </span>
          <span className="flex items-center gap-1.5" style={{ color: '#6E39CB' }}>
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#6E39CB' }} /> Outcome
          </span>
        </div>
      </div>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <CartesianGrid horizontal vertical={false} stroke="#F0F0F3" />
            <XAxis
              dataKey="day"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />
            <YAxis
              domain={[0, 3]}
              ticks={[0, 1, 2, 3]}
              interval={0}
              tickFormatter={(v) => LABELS[v] ?? ''}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={50}
            />

            {/* Dashed vertical guide line through the peak */}
            {peak && <ReferenceLine x={peak.day} stroke="#67E8F9" strokeDasharray="4 4" />}

            <Line type="monotone" dataKey="incomePos" stroke="#F94D4D" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="outcomePos" stroke="#6E39CB" strokeWidth={2.5} dot={false} />

            {peak && (
              <ReferenceDot
                x={peak.day}
                y={valueToPos(peak.income)}
                r={6}
                fill="#F94D4D"
                stroke="#fff"
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ProfileCard>
  );
}
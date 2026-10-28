import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import Card from './Card.jsx';
import { salesByAge, ageBands } from '../../data/dashboardData.js';

export default function SalesByAgeChart() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-base font-semibold text-gray-800">Sales by Age</p>
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <span className="h-2 w-2 rounded-full bg-brand-600" /> Sales
        </span>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesByAge} margin={{ left: 0, right: 10, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="salesByAgeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6E39CB" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#6E39CB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid horizontal vertical={false} stroke="#F0F0F3" strokeWidth={1} />

            {/* Y axis: age-band labels (10 to 15 ... 35 to 40), bottom to top */}
            <YAxis
              domain={[0, 6]}
              ticks={[0, 1, 2, 3, 4, 5]}
              tickFormatter={(v) => ageBands[v] ?? ''}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={70}
            />

            {/* X axis: numeric age labels, categorical spacing per Figma */}
            <XAxis
              dataKey="x"
              type="category"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip /> 
            <Area type="monotone" dataKey="y" stroke="#6E39CB" strokeWidth={3} fill="url(#salesByAgeFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

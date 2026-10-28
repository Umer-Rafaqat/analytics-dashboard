import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceDot } from 'recharts';
import { ChevronDown } from 'lucide-react';
import Card from './Card.jsx';
import { salesFunnel } from '../../data/analyticsData.js';

const peak = salesFunnel.find((d) => d.peak);

export default function SalesFunnelChart() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between ]">
        <p className="text-base font-semibold text-gray-800">Sales Funnel</p>
        <button
          type="button"
          className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm"
          style={{ backgroundColor: '#F4F5F9', color: '#6E39CB' }}
        >
          This Month <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesFunnel} margin={{ top: 30, right: 10, left: 61, bottom: 0 }}>
            <defs>
              <linearGradient id="funnelFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6E39CB" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#6E39CB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F0F0F3" />
            <XAxis dataKey="day" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(v) => `${v / 1000}K`}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip />
            <Area type="linear" dataKey="value" stroke="#6E39CB" strokeWidth={3} fill="url(#funnelFill)" />
            {peak && (
              <ReferenceDot
                x={peak.day}
                y={peak.value}
                r={5}
                fill="#fff"
                stroke="#6E39CB"
                strokeWidth={2}
                label={{
                  value: peak.value.toLocaleString(),
                  position: 'top',
                  fill: '#fff',
                  fontSize: 12,
                }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

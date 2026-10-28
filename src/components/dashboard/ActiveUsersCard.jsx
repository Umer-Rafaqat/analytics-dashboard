import { FileText, Users, MousePointerClick, Tag, Box } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, YAxis, CartesianGrid, Cell } from 'recharts';
import Card from './Card.jsx';
import { activeUsersBars, sparkline, statCards } from '../../data/dashboardData.js';

const STAT_ICONS = { Users, MousePointerClick, Tag, Box };


export default function ActiveUsersCard() {
  return (
    <Card className="border-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]" style={{ borderColor: '#FFFFFF' }}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
        <div>
          <p className="mb-4 text-sm font-medium text-gray-600">Active users right now</p>
          <p className="text-[48px] font-bold leading-none text-[#6E39CB]" style={{ fontFamily: 'Lato' }}>
            300
          </p>

          <div className="mt-4 flex items-center gap-2 px-3 py-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full">
              <FileText className="h-4 w-4" style={{ color: '#6E39CB' }} />
            </span>
            <p className="text-sm font-medium" style={{ color: '#3A3541' }}>
              Page views per minute
            </p>
          </div>

          <div className="mt-4 h-[1.09px] w-full bg-[#F4F5F9]" />

          <div className="mt-6 h-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkline}>
                <Line type="monotone" dataKey="v" stroke="#6E39CB" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-sm text-gray-500">Upgrade your payout method in setting</p>
        </div>

        <div
          className="h-[280px] rounded-2xl p-4"
          style={{ background: 'linear-gradient(90deg, #C2A1FD 0%, #9154FD 100%)' }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activeUsersBars} barGap={6}>
              <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.35)" vertical={false} />
              <YAxis
                domain={[100, 300]}
                ticks={[100, 200, 300]}
                tick={{ fill: '#3A3541', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                
                width={36}
              />
              <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={10}>
                {activeUsersBars.map((entry, i) => (
                  <Cell key={entry.name} fill={i % 2 === 0 ? '#FFFFFF' : '#6E39CB'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stat mini-cards — each card has its own border and shadow */}
      <div className="mt-6 grid grid-cols-2 gap-6 pt-6 md:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = STAT_ICONS[stat.icon];
          return (
            <Card
              key={stat.key}
              className="p-5 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]"
            >
              <div className="mb-[15px] flex items-center gap-2">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: stat.iconBg }}
                >
                  <Icon className="h-4 w-4" style={{ color: stat.iconColor }} />
                </span>
                <span className="text-sm font-medium text-gray-600">{stat.label}</span>
              </div>
              <p
                className="mb-[15px] text-[48px] font-bold leading-none text-gray-900"
                style={{ fontFamily: 'Lato' }}
              >
                {stat.value}
              </p>
              <div className="h-1.5 w-full rounded-full bg-gray-100">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${stat.barPercent}%`, backgroundColor: stat.iconColor }}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}

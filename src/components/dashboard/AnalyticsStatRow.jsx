import { ArrowUp, ArrowDown } from 'lucide-react';
import Card from './Card.jsx';
import { statRow } from '../../data/analyticsData.js';

export default function AnalyticsStatRow() {
  return (
    <Card className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statRow.map((stat) => {
        const up = stat.direction === 'up';
        return (
          <div
            key={stat.label}
            className="lg:border-r lg:last:border-r-0 lg:border-gray-100"
            style={{ marginTop: 30, marginBottom: 30, marginLeft: 30, marginRight: 30 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <span
                className={`flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium ${
                  up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
                }`}
              >
                {up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {stat.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-brand-600">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-400">{stat.sub}</p>
          </div>
        );
      })}
    </Card>
  );
}

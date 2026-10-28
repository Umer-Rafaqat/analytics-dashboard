import { Smartphone, Monitor, Tablet, Tv } from 'lucide-react';
import Card from './Card.jsx';
import { deviceCategory } from '../../data/analyticsData.js';

const ICONS = { Smartphone, Monitor, Tablet, Tv };

export default function DeviceCategoryCard() {
  return (
    <Card>
      <p className="mb-4 text-base font-semibold text-gray-800">Device Category</p>

      {/* Exact Figma spec: width 227 height 280 gap 30 */}
      <div className="flex flex-col" style={{ width: 227, height: 280, gap: 30, margin: 30 }}>
        {deviceCategory.map((d) => {
          const Icon = ICONS[d.icon];
          return (
            <div key={d.label} className="flex items-center justify-between">
              <span className="flex items-center gap-3 text-sm text-gray-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
                  <Icon className="h-4 w-4 text-brand-600" />
                </span>
                {d.label}
              </span>
              <span className="text-sm font-medium text-gray-800">{d.value}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

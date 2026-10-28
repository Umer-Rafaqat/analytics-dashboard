import { Box, ChevronRight } from 'lucide-react';
import Card from './Card.jsx';
import { earningsByItem } from '../../data/dashboardData.js';

export default function EarningsByItemCard() {
  return (
    <Card className="flex h-[300px] w-[270px] flex-col rounded-lg">
      <p className="mb-4 text-base font-semibold text-gray-800">Earnings by item</p>
      <div className="space-y-[30px]">
        {earningsByItem.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Outer box: item.outerColor. Inner icon box: item.iconBg (exact Figma values) */}
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: item.outerColor }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Box className="h-3.5 w-3.5 text-white" />
                </span>
              </span>
              <div>
                <p className="text-sm font-medium text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        ))}
      </div>
    </Card>
  );
}

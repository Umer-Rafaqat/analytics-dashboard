import Card from './Card.jsx';
import { topCountries } from '../../data/analyticsData.js';

export default function TopCountriesCard() {
  return (
    <Card>
      <p className="mb-4 text-base font-semibold text-gray-800">Top Countries</p>

      {/* Exact Figma spec: width 227 height 280 gap 30 */}
      <div className="flex flex-col" style={{ width: 227, height: 280, gap: 30, margin: 30 }}>
        {topCountries.map((c) => (
          <div key={c.label} className="flex items-center justify-between">
            <span className="flex items-center gap-3 text-sm text-gray-700">
              <img
                src={`https://flagcdn.com/24x18/${c.code}.png`}
                srcSet={`https://flagcdn.com/48x36/${c.code}.png 2x`}
                alt={`${c.label} flag`}
                className="h-[18px] w-6 rounded-sm object-cover"
              />
              {c.label}
            </span>
            <span className="text-sm font-medium text-gray-800">{c.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

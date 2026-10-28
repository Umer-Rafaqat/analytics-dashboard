import { HelpCircle } from 'lucide-react';
import ProfileCard from './ProfileCard.jsx';
import { gender } from '../../data/profileData.js';

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArcFlag = Math.abs(startAngle - endAngle) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

export default function GenderCard() {
  const total = gender.men + gender.women;
  const menSweep = (gender.men / total) * 180;
  const boundaryAngle = 180 - menSweep;
  const handle = polarToCartesian(175, 175, 150, boundaryAngle);

  return (
    <ProfileCard className="p-6" style={{ width: 400, height: 340 }}>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">Gender</p>
        <HelpCircle className="h-5 w-5 text-gray-300" />
      </div>

      <svg viewBox="0 0 350 210" className="w-full">
        <path
          d={describeArc(175, 175, 150, 180, boundaryAngle)}
          fill="none"
          stroke="#6E39CB"
          strokeWidth={24}
          strokeLinecap="round"
        />
        <path
          d={describeArc(175, 175, 150, boundaryAngle, 0)}
          fill="none"
          stroke="#D3BBFE"
          strokeWidth={24}
          strokeLinecap="round"
        />
        <circle cx={handle.x} cy={handle.y} r={12} fill="#6E39CB" stroke="#fff" strokeWidth={4} />
      </svg>

      <div className="mt-2 flex items-center justify-between px-4">
        <span className="flex items-center gap-2 text-sm text-gray-700">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#6E39CB' }} />
          {gender.men}% Men
        </span>
        <span className="flex items-center gap-2 text-sm text-gray-700">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#D3BBFE' }} />
          {gender.women}% Women
        </span>
      </div>
    </ProfileCard>
  );
}

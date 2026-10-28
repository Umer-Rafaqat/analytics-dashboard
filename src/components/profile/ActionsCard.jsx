import { HelpCircle } from 'lucide-react';
import ProfileCard from './ProfileCard.jsx';
import { actions } from '../../data/profileData.js';

export default function ActionsCard() {
  return (
    <ProfileCard className="p-6" style={{ width: 280, height: 320 }}>
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">Actions</p>
        <HelpCircle className="h-5 w-5 text-gray-300" />
      </div>

      <div className="space-y-4 ">
        {actions.map((item) => (
          <div key={item.label} className="flex items-center justify-between pb-3">
            <span className="text-sm text-gray-500">{item.label}</span>
            <span className="text-sm font-bold" style={{ color: '#6E39CB' }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
}

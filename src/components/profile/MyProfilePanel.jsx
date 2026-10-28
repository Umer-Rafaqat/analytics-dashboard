import { useState } from 'react';
import { Users2, Settings, ChevronDown } from 'lucide-react';
import ProfileCard from './ProfileCard.jsx';
import { myProfile, hashtagGroups } from '../../data/profileData.js';

function HashtagGroup({ group }) {
  const [open, setOpen] = useState(true);

  return (
    <div className=" pt-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <p className="text-sm  text-gray-800">{group.title}</p>
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-2 flex flex-wrap gap-3">
          {group.tags.map((tag) => (
            <span key={tag} className="text-xs" style={{ color: '#89868D' }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MyProfilePanel() {
  return (
    <ProfileCard className="flex flex-col p-6 w-[20%]" style={{  height: 1150 }}>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">My profile</p>
        <div className="flex items-center gap-3 text-gray-400">
          <Users2 className="h-[18px] w-[18px]" />
          <Settings className="h-[18px] w-[18px]" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={myProfile.avatar}
          alt={myProfile.username}
          className="h-24 w-24 rounded-full object-cover ring-4"
          style={{ boxShadow: '0 0 0 6px #D3BBFE55' }}
        />
        <p className="mt-3 text-base font-semibold text-gray-900">{myProfile.username}</p>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-800">VIP Training Course</p>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-sm font-medium" style={{ color: '#6E39CB' }}>
            {myProfile.vipProgress}%
          </span>
          <div className="h-[10px] flex-1 rounded-full bg-gray-100">
            <div
              className="h-[10px] rounded-full"
              style={{ width: `${myProfile.vipProgress}%`, backgroundColor: '#6E39CB' }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-800">Hashtags sets</p>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: '#D3BBFE' }}
        >
          <Settings className="h-4 w-4" style={{ color: '#6E39CB' }} />
        </span>
      </div>

      <div className="mt-4 space-y-4">
        {hashtagGroups.map((group) => (
          <HashtagGroup key={group.title} group={group} />
        ))}
      </div>
    </ProfileCard>
  );
}

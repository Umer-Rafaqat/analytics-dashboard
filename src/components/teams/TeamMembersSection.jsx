import { useState } from 'react';
import { Check } from 'lucide-react';
import { teamMembers } from '../../data/teamsData.js';

function Checkbox({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex h-4 w-4 shrink-0 items-center justify-center  border transition"
      style={{
        backgroundColor: checked ? '#89868D' : '#fff',
        borderColor: checked ? '#4B5563' : '#D1D5DB',
      }}
    >
      {checked && <Check className="h-3.5 w-3.5 text-white" />}
    </button>
  );
}

export default function TeamMembersSection() {
  const [selected, setSelected] = useState(() => new Set(teamMembers.map((_, i) => i)));

  const allChecked = selected.size === teamMembers.length;

  const toggleAll = () => {
    setSelected(allChecked ? new Set() : new Set(teamMembers.map((_, i) => i)));
  };

  const toggleOne = (i) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    // Two-column row: left = title/description, right = the member list
    <div className="flex gap-8" style={{ marginTop: 20, marginBottom: 30 ,paddingBottom: 124, marginRight: 30, marginLeft: 30}}>
      <div className="w-[260px] shrink-0">
        <p className="text-xl font-bold text-gray-900">Team members</p>
        <p className="mt-3 text-sm text-gray-500">
          Get your projects up and running faster by inviting your team to collaborate.
        </p>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-4 border-b border-gray-100 pb-6 pt-9">
          <Checkbox checked={allChecked} onChange={toggleAll} />
          <span className="text-sm text-gray-500">Name</span>
        </div>

        <div className="divide-y divide-gray-100">
          {teamMembers.map((member, i) => (
            <div key={member.email} className="flex items-center gap-4 py-9">
              <Checkbox checked={selected.has(i)} onChange={() => toggleOne(i)} />
              <img src={member.avatar} alt={member.name} className="h-10 w-10 rounded-full object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-500">{member.email}</p>
              </div>

              <button type="button" className="text-sm text-gray-500 hover:text-gray-700">
                Admin
              </button>
              <button type="button" className="text-sm text-gray-500 hover:text-red-500">
                Delete
              </button>
              <button type="button" className="text-sm font-medium" style={{ color: '#6E39CB' }}>
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Mail, Plus, ChevronDown } from 'lucide-react';

const ROLES = ['Read-only', 'Editor', 'Admin'];

function makeInvite() {
  return { id: crypto.randomUUID(), email: '', role: 'Read-only' };
}

export default function InviteTeamSection() {
  const [invites, setInvites] = useState([makeInvite(), makeInvite(), makeInvite()]);

  const updateInvite = (id, patch) => {
    setInvites((prev) => prev.map((inv) => (inv.id === id ? { ...inv, ...patch } : inv)));
  };

  const addRow = () => setInvites((prev) => [...prev, makeInvite()]);

  const sendInvites = () => {
    const valid = invites.filter((inv) => inv.email.trim());
    if (!valid.length) return;
   
    console.log('Sending invites for:', valid);
  };

  return (
    // Two-column row: left = title/description, right = the actual invite form
    <div className="flex gap-8 border-b border-gray-100 pb-6" style={{ marginTop: 20 }}>
      <div className="w-[260px] shrink-0">
        <p className="text-lg font-bold text-gray-900">Invite team members</p>
        <p className="mt-1 text-sm text-gray-500">
          Get your projects up and running faster by inviting your team to collaborate.
        </p>
      </div>

      <div className="flex-1">
        <div className="space-y-3">
          {invites.map((inv) => (
            <div key={inv.id} className="flex gap-4">
              <div className="relative flex-1 py-2">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="team@team.com"
                  value={inv.email}
                  onChange={(e) => updateInvite(inv.id, { email: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-brand-400"
                />
              </div>

              <div className="relative w-[160px] shrink-0 py-2">
                <select
                  value={inv.role}
                  onChange={(e) => updateInvite(inv.id, { role: e.target.value })}
                  className="w-full appearance-none rounded-lg border border-gray-200 py-2.5 pl-4 pr-9 text-sm text-gray-700 outline-none focus:border-brand-400"
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={addRow}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <Plus className="h-4 w-4" /> Add another
          </button>

          <button
            type="button"
            onClick={sendInvites}
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: '#6E39CB' }}
          >
            <Mail className="h-4 w-4" /> Send invites
          </button>
        </div>
      </div>
    </div>
  );
}

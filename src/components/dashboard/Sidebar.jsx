import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  FileText,
  AppWindow,
  ShoppingBag,
  ShieldCheck,
  ChevronDown,
  MoreVertical,
} from 'lucide-react';
import { navSections } from '../../data/navigation.js';

const ICONS = { Home, FileText, AppWindow, ShoppingBag, ShieldCheck };
const ACTIVE_BG = '#DECCFE';
const ACTIVE_COLOR = '#6E39CB';
const DEFAULT_COLOR = '#3A3541';

function isSectionActive(section, pathname) {
  return section.children.some((child) => pathname.startsWith(child.path));
}

export default function Sidebar() {
  const location = useLocation();
  const activeSectionKey = navSections.find((s) => isSectionActive(s, location.pathname))?.key;
  const [openKey, setOpenKey] = useState(activeSectionKey ?? 'home');

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[272px] shrink-0 flex-col justify-between overflow-y-auto border-r border-gray-100 bg-white px-4 py-6">
      <div>
        {/* Logo */}
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-xl font-black text-white">
            M
          </div>
        </div>

        {/* Nav — 30px gap between top-level sections */}
        <nav className="flex flex-col" style={{ gap: 30 }}>
          {navSections.map((section) => {
            const Icon = ICONS[section.icon];
            const isOpen = openKey === section.key;
            const isActive = activeSectionKey === section.key;

            return (
              <div key={section.key}>
                {/* Relative wrapper only around the button, so the left accent
                    bar matches just this row's height (not the expanded list) */}
                <div className="relative">
                  {isActive && (
                    <span
                      className="absolute top-0 h-full w-1 rounded-r-full"
                      style={{ left: -16, backgroundColor: ACTIVE_COLOR }}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : section.key)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-gray-50"
                    style={{
                      backgroundColor: isActive ? ACTIVE_BG : 'transparent',
                      color: isActive ? ACTIVE_COLOR : DEFAULT_COLOR,
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-[18px] w-[18px]" />
                      {section.label}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <div className="ml-10 mt-1 space-y-1 pl-3">
                    {section.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive: childActive }) =>
                          `block rounded-lg px-3 py-2 text-sm transition ${
                            childActive ? 'font-medium' : 'hover:text-gray-800'
                          }`
                        }
                        style={({ isActive: childActive }) => ({
                          color: childActive ? ACTIVE_COLOR : DEFAULT_COLOR,
                        })}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* User card */}
      <div className="flex items-center gap-3 rounded-2xl bg-brand-600 px-4 py-3">
        <img
          src="https://i.pravatar.cc/64?img=47"
          alt="Anita Cruz"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">Anita Cruz</p>
          <p className="truncate text-xs text-white/70">anita@commerce.com</p>
        </div>
        <MoreVertical className="h-4 w-4 shrink-0 text-white/80" />
      </div>
    </aside>
  );
}

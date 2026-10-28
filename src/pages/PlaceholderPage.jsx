import { useLocation } from 'react-router-dom';
import Topbar from '../components/dashboard/Topbar.jsx';
import Card from '../components/dashboard/Card.jsx';
import { navSections } from '../data/navigation.js';

function findLabel(pathname) {
  for (const section of navSections) {
    const match = section.children.find((c) => c.path === pathname);
    if (match) return match.label;
  }
  return 'Page';
}

export default function PlaceholderPage() {
  const { pathname } = useLocation();
  const label = findLabel(pathname);

  return (
    <div>
      <Topbar title={label} />
      <Card className="flex min-h-[300px] items-center justify-center text-center">
        <div>
          <p className="text-lg font-semibold text-gray-800">{label}</p>
          <p className="mt-1 text-sm text-gray-500">This page is coming soon.</p>
        </div>
      </Card>
    </div>
  );
}

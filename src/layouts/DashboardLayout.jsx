import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar.jsx';

const SIDEBAR_WIDTH = 282;

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      {/* Offset by sidebar width; this pane scrolls independently while sidebar stays fixed */}
      <main className="h-screen overflow-y-auto px-10 pb-6 " style={{ marginLeft: SIDEBAR_WIDTH, paddingTop: 30 }}>
        <Outlet />
      </main>
    </div>
  );
}

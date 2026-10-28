import Topbar from '../components/dashboard/Topbar.jsx';
import TeamManagementCard from '../components/teams/TeamManagementCard.jsx';

export default function TeamsPage() {
  return (
    <div>
      <Topbar title="Profile/Teams" />

      {/* Exact Figma spec: width 1162, mt 30 */}
      <div className="w-[100%] shrink-0" style={{  marginTop: 30 }}>
        <TeamManagementCard />
      </div>
    </div>
  );
}

import TeamHeader from './TeamHeader.jsx';
import InviteTeamSection from './InviteTeamSection.jsx';
import TeamMembersSection from './TeamMembersSection.jsx';


export default function TeamManagementCard() {
  return (
    <div className=" shrink-0 rounded-lg bg-white" >
      <div style={{ marginLeft: 30, marginRight: 30 }}>
        <TeamHeader />
        <InviteTeamSection />
        <TeamMembersSection />
      </div>
    </div>
  );
}

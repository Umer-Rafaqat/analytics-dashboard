import Topbar from '../components/dashboard/Topbar.jsx';
import StatCard from '../components/profile/StatCard.jsx';
import FollowersCard from '../components/profile/FollowersCard.jsx';
import ActionsCard from '../components/profile/ActionsCard.jsx';
import InteractionCard from '../components/profile/InteractionCard.jsx';
import BestTimeCard from '../components/profile/BestTimeCard.jsx';
import GenderCard from '../components/profile/GenderCard.jsx';
import AgeRangeCard from '../components/profile/AgeRangeCard.jsx';
import MyProfilePanel from '../components/profile/MyProfilePanel.jsx';
import { statCards } from '../data/profileData.js';

export default function ProfileOverviewPage() {
  return (
    <div>
      <Topbar title="Profile/Profile overview" />

      <div className="flex items-start gap-[30px]">
        {/* Main content column — fixed 870px, matches 3x280+15+15 and every row pairing below */}
        <div className="flex flex-col gap-[30px] w-[80%]" >
          {/* Row 1: 3 stat cards, gap 15 */}
          <div className="flex gap-[15px]">
            {statCards.map((stat) => (
              <StatCard key={stat.key} stat={stat} />
            ))}
          </div>

          {/* Row 2: Followers + Actions, gap 26 */}
          <div className="flex gap-[26px]">
            <FollowersCard />
            <ActionsCard />
          </div>

          {/* Row 3: Interaction + Best time, gap 26 */}
          <div className="flex gap-[26px]">
            <InteractionCard />
            <BestTimeCard />
          </div>

          {/* Row 4: Gender + Age range, gap 26 */}
          <div className="flex gap-[26px]">
            <GenderCard />
            <AgeRangeCard />
          </div>
        </div>

        {/* Right rail — 262px, gap 30 from content column */}
        <MyProfilePanel   />
      </div>
    </div>
  );
}

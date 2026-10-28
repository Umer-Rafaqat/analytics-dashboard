import Topbar from '../components/dashboard/Topbar.jsx';
import ActiveUsersCard from '../components/dashboard/ActiveUsersCard.jsx';
import EarningCard from '../components/dashboard/EarningCard.jsx';
import EarningsByItemCard from '../components/dashboard/EarningsByItemCard.jsx';
import SalesByAgeChart from '../components/dashboard/SalesByAgeChart.jsx';
import ImpressionCard from '../components/dashboard/ImpressionCard.jsx';

export default function DashboardPage() {
  return (
    <div>
      <Topbar title="Dashboard" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <ActiveUsersCard />
          <SalesByAgeChart />
        </div>

        <div className="space-y-6">
          <EarningCard />
          <EarningsByItemCard />
          <ImpressionCard />
        </div>
      </div>
    </div>
  );
}

import Topbar from '../components/dashboard/Topbar.jsx';
import AnalyticsStatRow from '../components/dashboard/AnalyticsStatRow.jsx';
import SalesFunnelChart from '../components/dashboard/SalesFunnelChart.jsx';
import DeviceCategoryCard from '../components/dashboard/DeviceCategoryCard.jsx';
import WatchlistsChart from '../components/dashboard/WatchlistsChart.jsx';
import TopCountriesCard from '../components/dashboard/TopCountriesCard.jsx';

export default function AnalyticsPage() {
  return (
    <div>
      <Topbar title="Analytics" />

      <div className="space-y-6">
        <AnalyticsStatRow />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
          <SalesFunnelChart />
          <DeviceCategoryCard />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
          <WatchlistsChart />
          <TopCountriesCard />
        </div>
      </div>
    </div>
  );
}

import StatsCard from "@/components/dashboard/stats-card";
import RevenueChart from "@/components/dashboard/revenue-chart";
import RecentActivity from "@/components/dashboard/recent-activity";
import TeamOverview from "@/components/dashboard/team-overview";

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="stats-grid">
        <StatsCard
          title="Monthly Revenue"
          value="$12,430"
          subtitle="+18% vs last month"
        />

        <StatsCard
          title="Active Users"
          value="1,284"
          subtitle="+9% growth"
        />

        <StatsCard
          title="Conversion Rate"
          value="6.4%"
          subtitle="Healthy performance"
        />

        <StatsCard
          title="Trial Accounts"
          value="84"
          subtitle="Potential upgrades"
        />
      </section>

      <section className="dashboard-content-grid">
        <RevenueChart />
        <TeamOverview />
      </section>

      <RecentActivity />
    </div>
  );
}
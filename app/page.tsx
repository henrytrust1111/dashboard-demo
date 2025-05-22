"use client";

import { AnalyticsCard } from "./components/AnalyticsCard";
import Container from "./components/Container";
import dynamic from "next/dynamic";
const HeaderDashboard = dynamic(
  () =>
    import("./components/HeaderDashboard").then((mod) => mod.HeaderDashboard),
  { ssr: false }
);
import { IncomeChart } from "./components/IncomeChart";
import { MonthlyIssuanceChart } from "./components/MonthlyIssuanceChart";
import { QuickAccess } from "./components/QuickAccess";
import { RecentRequestsTable } from "./components/RecentRequestsTable";
import { StatusDistributionChart } from "./components/StatusDistributionChart";
// const Header = dynamic(() => import("./components/Header"), { ssr: false });

export default function DashboardPage() {
  return (
    <Container>
      <div className="space-y-6">
        <HeaderDashboard />
        <QuickAccess />

        {/* Analytics Card */}
        <div className="mt-3">
          <div className="flex items-center justify-between gap-4 mb-3">
            <p className="text-[#000000] text-lg font-bold">Analytics</p>
            {/* vertical rule */}
            <div className="flex-1 h-[0.3px] bg-[#D0D5DD]" />
          </div>
          <AnalyticsCard />
        </div>

        <section className="grid gap-6 md:grid-cols-2">
          <MonthlyIssuanceChart />
          <RecentRequestsTable />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <IncomeChart />
          <StatusDistributionChart />
        </section>
      </div>
    </Container>
  );
}

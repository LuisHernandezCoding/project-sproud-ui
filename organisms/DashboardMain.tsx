import type { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import KPISection from "../molecules/KPISection";
import BudgetsGlance from "../molecules/BudgetsGlance";
import RecentActivity from "../molecules/RecentActivity";
import BillsGrid from "../molecules/BillsGrid";
import H2 from "../atoms/H2";
import P from "../atoms/P";

export default function DashboardMain(): ReactElement {
  return (
    <div className="h-full text-base-content min-w-[100vw]">
      <Header />

      <main id="main-dashboard" className="bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <H2 className="text-3xl text-gray-900 mb-2">Dashboard Overview</H2>
            <P className="text-gray-600">Your financial snapshot for January 2025</P>
          </div>

          <KPISection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <section id="budgets-glance">
              <BudgetsGlance />
            </section>

            <section id="recent-activity">
              <RecentActivity />
            </section>
          </div>

          <div id="upcoming-bills" className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <H2 className="text-lg text-gray-900">Upcoming Bills</H2>
              <div className="text-gray-400" />
            </div>
            <BillsGrid
              items={[
                { name: "Electric Bill", due: "Due in 2 days", amount: "$127.45", date: "Due Jan 20, 2025" },
                { name: "Internet", due: "Due in 5 days", amount: "$79.99", date: "Due Jan 23, 2025" },
                { name: "Car Insurance", due: "Due in 8 days", amount: "$156.00", date: "Due Jan 26, 2025" },
              ]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

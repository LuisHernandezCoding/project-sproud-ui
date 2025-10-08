import type { ReactElement } from "react";
import KPICard from "./KPICard";
import Icon from "../atoms/Icon";
import ProgressBar from "../atoms/ProgressBar";
import AmountPair from "./AmountPair";

export default function KPISection(): ReactElement {
  return (
    <div id="kpi-section" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <KPICard
        title="Monthly Spend vs Budget"
        icon={<Icon name="chart-line" decorative title="Monthly spend vs budget" />}
      >
        <AmountPair amount="$2,847" note="of $3,200" amountValue={2847} />
        <ProgressBar percent={89} />
        <p className="text-sm text-gray-600">$353 remaining this month</p>
      </KPICard>

      <KPICard
        title={
          <div className="flex items-center gap-2">
            <span>Cash on Hand</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full">
              New
            </span>
          </div>
        }
        icon={<Icon name="wallet" decorative title="Cash on hand" />}
      >
        <div className="text-2xl text-gray-900">$8,432</div>
        <div className="flex items-center space-x-2">
          <Icon name="money" decorative className="text-gray-600 text-sm" title="Cash delta" />
          <span className="text-sm text-gray-600">+2.3% from last month</span>
        </div>
        <p className="text-sm text-gray-600">Across 3 accounts</p>
      </KPICard>

      <KPICard title="Goals Funded" icon={<Icon name="target" decorative title="Goals funded" />}>
        <AmountPair amount="3 of 5" note="goals" />
        <ProgressBar percent={60} />
        <p className="text-sm text-gray-600">Emergency fund fully funded</p>
      </KPICard>
    </div>
  );
}

import type { ReactElement } from "react";
import Card from "../atoms/Card";
import H3 from "../atoms/H3";
import Icon from "../atoms/Icon";
import TransactionList from "./TransactionList";

export default function RecentActivity(): ReactElement {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <H3 className="text-lg text-gray-900">Recent Activity</H3>
        <div className="text-gray-400">
          <Icon name="bell" decorative title="Notifications" />
        </div>
      </div>
      <div className="space-y-4">
        <TransactionList
          items={[
            { title: "Starbucks Coffee", when: "Today, 9:15 AM", amount: "-$4.85", icon: "cup" },
            { title: "Shell Gas Station", when: "Yesterday, 6:30 PM", amount: "-$45.20", icon: "gas" },
            { title: "Paycheck Deposit", when: "Jan 15, 2025", amount: "+$2,847.00", icon: "plus" },
            { title: "Amazon Purchase", when: "Jan 14, 2025", amount: "-$67.99", icon: "shopping-cart" },
            { title: "Rent Payment", when: "Jan 1, 2025", amount: "-$1,200.00", icon: "house" },
          ]}
        />
      </div>
    </Card>
  );
}

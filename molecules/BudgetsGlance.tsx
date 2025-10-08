import type { ReactElement } from "react";
import Card from "../atoms/Card";
import H3 from "../atoms/H3";
import Icon from "../atoms/Icon";
import BudgetsList from "./BudgetsList";

export default function BudgetsGlance(): ReactElement {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <H3 className="text-lg text-gray-900">Budgets at a Glance</H3>
        <div className="text-gray-400">
          <Icon name="caret-down" decorative title="More" />
        </div>
      </div>
      <div className="space-y-4">
        <BudgetsList
          items={[
            { name: "Dining Out", amount: "+$127", note: "over budget" },
            { name: "Groceries", amount: "-$89", note: "under budget" },
            { name: "Entertainment", amount: "+$23", note: "over budget" },
          ]}
        />
      </div>
    </Card>
  );
}

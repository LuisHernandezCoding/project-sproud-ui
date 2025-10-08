import Card from "../atoms/Card";

type Props = {
  total?: number;
  spent?: number;
  className?: string;
};

export default function BudgetSummaryCard({
  total = 0,
  spent = 0,
  className = "",
}: Props) {
  const remaining = total - spent;
  return (
  <Card className={className + " border border-gray-200 p-4 bg-white"}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-600">Budget</div>
          <div className="text-2xl font-semibold text-gray-900">
            ${total.toFixed(2)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Remaining</div>
          <div className="text-2xl font-semibold text-gray-900">
            ${remaining.toFixed(2)}
          </div>
        </div>
      </div>
    </Card>
  );
}

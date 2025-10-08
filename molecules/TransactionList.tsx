import Icon from "../atoms/Icon";

type Tx = { title: string; when: string; amount: string; icon?: string };

export default function TransactionList({
  items = [],
  className = "",
}: {
  items?: Tx[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((t) => (
        <div key={t.title} className="flex items-center space-x-3 p-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Icon
              name={t.icon}
              decorative
              className="text-gray-600 text-sm"
              title={`Transaction: ${t.title}`}
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-900">{t.title}</p>
            <p className="text-sm text-gray-500">{t.when}</p>
          </div>
          <span
            className={
              t.amount.startsWith("+") ? "text-gray-600" : "text-gray-900"
            }
          >
            {t.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

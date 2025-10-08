import Card from "../atoms/Card";
import H3 from "../atoms/H3";

type Props = {
  title: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export default function KPICard({
  title,
  icon,
  children,
  className = "",
}: Props) {
  return (
    <Card
      className={["border border-gray-200 p-6 bg-white", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center justify-between mb-4">
        <H3 className="text-lg text-gray-900">{title}</H3>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="space-y-3">{children}</div>
    </Card>
  );
}

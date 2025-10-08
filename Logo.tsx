import Icon from "./atoms/Icon";
import H2 from "./atoms/H2";

export default function Logo({ className = "" }: { className?: string }) {
  // Centralized logo used across headers. Keep layout and height consistent.
  return (
    <div className={`flex items-center gap-3 h-8 ${className}`}>
      <Icon name="chart-line" className="text-2xl text-gray-700" decorative />
      <H2 className="text-xl leading-none">Budget Boogie</H2>
    </div>
  );
}

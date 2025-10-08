import Logo from "../Logo";

export default function OnboardingHeader({
  stepLabel = "Step 1 of 3",
  steps = 3,
  progress = 1,
}: {
  stepLabel?: string;
  steps?: number;
  progress?: number;
}) {
  // render a simple compact progress bar made of small bars
  const bars = Array.from({ length: steps }).map((_, i) => i < progress);

  return (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="w-full flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{stepLabel}</span>
          <div className="flex gap-1 items-center">
            {bars.map((filled, idx) => (
              <div
                key={idx}
                className={`w-8 h-1 rounded ${filled ? "bg-gray-900" : "bg-gray-200"}`}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

import React from "react";

type Step = { id: string; title: string };

type Props = {
  steps: Step[];
  currentIndex?: number;
};

export default function ProgressStepper({ steps, currentIndex = 0 }: Props) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center gap-4">
        {steps.map((s, i) => (
          <li key={s.id} className="flex items-center">
            <div
              className={[
                "h-8 w-8 flex items-center justify-center rounded-full text-sm",
                i <= currentIndex
                  ? "bg-gray-600 text-white"
                  : "bg-gray-100 text-gray-700",
              ].join(" ")}
            >
              {i + 1}
            </div>
            <div className="ml-2 text-sm text-gray-600">{s.title}</div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

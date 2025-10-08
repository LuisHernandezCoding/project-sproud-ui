import ProgressStepper from "../molecules/ProgressStepper";

export default function OnboardingStepper({
  current = 0,
}: {
  current?: number;
}) {
  const steps = [
    { id: "welcome", title: "Welcome" },
    { id: "name", title: "Name" },
    { id: "workspace", title: "Workspace" },
  ];

  return <ProgressStepper steps={steps} currentIndex={current} />;
}

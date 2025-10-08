import React from "react";
import OnboardingStepper from "../organisms/OnboardingStepper";

export default function OnboardingSteps({
  currentStep = 0,
}: {
  currentStep?: number;
}) {
  return (
    <div className="w-full">
      <OnboardingStepper current={currentStep} />
    </div>
  );
}

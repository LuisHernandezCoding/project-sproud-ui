import React from "react";
import { Card, Icon, P } from "../atoms";

type Props = {
  title: string;
  description?: string;
  icon?: string;
};

export default function OnboardingCard({ title, description, icon }: Props) {
  return (
    <Card className="p-4 flex items-start gap-4">
      <div className="p-2 bg-gray-50 rounded-md">
        {icon ? (
          <Icon name={icon} size={20} />
        ) : (
          <Icon name="spark" size={20} />
        )}
      </div>
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        {description ? (
          <P className="text-sm text-slate-600 mt-1">{description}</P>
        ) : null}
      </div>
    </Card>
  );
}

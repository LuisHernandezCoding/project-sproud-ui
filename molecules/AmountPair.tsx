import React from "react";
import Money from "../atoms/Money";

type Props = {
  amount?: React.ReactNode;
  note?: React.ReactNode;
  amountValue?: number | string;
};

export default function AmountPair({ amount, note, amountValue }: Props) {
  return (
    <div className="flex justify-between items-center">
      <Money value={amountValue} className="text-2xl text-gray-900">
        {amount}
      </Money>
      <span className="text-sm text-gray-500">{note}</span>
    </div>
  );
}

import React from "react";

type FooterContentProps = {
  year?: number;
  productName?: string;
};

export default function FooterContent({
  year = new Date().getFullYear(),
  productName = "Budget Boogie",
}: FooterContentProps) {
  return (
    <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
      <p>
        © {year} {productName}. All rights reserved.
      </p>
    </div>
  );
}

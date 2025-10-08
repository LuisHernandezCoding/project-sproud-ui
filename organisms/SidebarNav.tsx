import React from "react";
import NavItem from "../molecules/NavItem";

export default function SidebarNav() {
  return (
    <nav aria-label="Sidebar Navigation" className="w-56">
      <ul className="space-y-2">
        <li>
          <NavItem to="/dashboard" icon={<svg className="h-5 w-5" />} active>
            Dashboard
          </NavItem>
        </li>
        <li>
          <NavItem to="/transactions" icon={<svg className="h-5 w-5" />}>
            Transactions
          </NavItem>
        </li>
        <li>
          <NavItem to="/budgets" icon={<svg className="h-5 w-5" />}>
            Budgets
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}

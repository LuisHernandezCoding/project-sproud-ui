// Import CSS styles first
import "./index.css";

// Export all atoms
export * from "./atoms";

// Export all organisms
export * from "./organisms";

// Export onboarding components
export * from "./onboarding";

// Export molecules with explicit naming to avoid conflicts
export { default as SelectMolecule } from "./molecules/Select";
export { default as FormField } from "./molecules/FormField";
export { default as Modal } from "./molecules/Modal";
export { default as NavItem } from "./molecules/NavItem";
export { default as ProgressStepper } from "./molecules/ProgressStepper";
export { default as AuthEmailForm } from "./molecules/AuthEmailForm";
export { default as KPICard } from "./molecules/KPICard";
export { default as TransactionList } from "./molecules/TransactionList";
export { default as BudgetsList } from "./molecules/BudgetsList";
export { default as BillsGrid } from "./molecules/BillsGrid";
export { default as AmountPair } from "./molecules/AmountPair";
export { default as KPISection } from "./molecules/KPISection";
export { default as BudgetsGlance } from "./molecules/BudgetsGlance";
export { default as RecentActivity } from "./molecules/RecentActivity";

// Export main organism components
export { default as DashboardMain } from "./organisms/DashboardMain";
export { default as Footer } from "./organisms/Footer";
export { default as Navbar } from "./organisms/Navbar";

// Export utility components
export { default as ResponsiveContent } from "./ResponsiveContent/ResponsiveContent";
export { default as Logo } from "./Logo";

// Explicitly export key atoms that might be imported directly
export { default as Button } from "./atoms/Button";
export { default as Input } from "./atoms/Input";
export { default as Badge } from "./atoms/Badge";
export { default as Card } from "./atoms/Card";
export { default as Money } from "./atoms/Money";
export { default as ProgressBar } from "./atoms/ProgressBar";

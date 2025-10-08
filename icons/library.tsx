import React from "react";
import {
  ChartLineUp,
  Wallet,
  Target,
  X,
  Check,
  Bell,
  ArrowDown,
  Gear,
  Plus,
  ArrowRight,
  ArrowLeft,
  CaretDown,
  CaretUp,
  Money,
  Shield,
} from "phosphor-react";

// Export a mapping from string keys to React icon components. Add entries as
// we discover usages across the app.
const icons: Record<string, React.ElementType> = {
  "chart-line": ChartLineUp,
  wallet: Wallet,
  target: Target,
  x: X,
  check: Check,
  bell: Bell,
  download: ArrowDown,
  gear: Gear,
  plus: Plus,
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  "caret-down": CaretDown,
  "caret-up": CaretUp,
  "shield-halved": Shield,
  money: Money,
};

export default icons;

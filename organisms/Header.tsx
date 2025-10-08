import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import Select from "../atoms/Select";
import Avatar from "../atoms/Avatar";
import NavItem from "../molecules/NavItem";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [workspaceName, setWorkspaceName] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    // This would be replaced with actual auth/data fetching in the consuming app
    setWorkspaceName("Default Workspace");
    setAvatarUrl("https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=789");
  }, []);
  return (
    <header id="header" className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Workspace name */}
        <div className="flex items-center space-x-4">
          <Logo />
          <div className="hidden sm:block text-sm text-gray-700 mr-4">
            {workspaceName ? (
              <span>
                Workspace: <strong className="text-gray-900">{workspaceName}</strong>
              </span>
            ) : (
              <span className="text-gray-500">No workspace</span>
            )}
          </div>
        </div>

        {/* Right: nav, month selector, avatar */}
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-2 mr-4" aria-label="Primary">
            <NavItem to="/onboarding" className="text-gray-500 hover:text-gray-900">
              Onboarding
            </NavItem>
            <NavItem to="/dashboard" active className="border-b-2 border-gray-500 pb-1">
              Dashboard
            </NavItem>
            <NavItem to="/budgets" className="text-gray-500 hover:text-gray-900">
              Budgets
            </NavItem>
            <NavItem to="/calendar" className="text-gray-500 hover:text-gray-900">
              Calendar
            </NavItem>
            <NavItem to="/reports" className="text-gray-500 hover:text-gray-900">
              Reports
            </NavItem>
            <NavItem to="/goals" className="text-gray-500 hover:text-gray-900">
              Goals
            </NavItem>
          </nav>

          <Select className="w-40 text-sm" aria-label="Month selector">
            <option>January 2025</option>
            <option>February 2025</option>
            <option>March 2025</option>
          </Select>

          <Link to="/profile" title="Profile">
            <Avatar
              src={avatarUrl || "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=789"}
              alt="Profile"
              size="md"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

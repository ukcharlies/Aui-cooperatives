import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  userName: string;
  userProfilePicture: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, userProfilePicture }) => {
  return (
    <aside className="h-screen w-64 flex fixed top-0 left-0 border-r shadow-sm">
      <nav className="h-full flex flex-col justify-between shadow-sm">
        <div className="flex items-center p-2.5">
          <img
            src={userProfilePicture}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span>{userName}</span>
        </div>
        <ul className="list-none p-0">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black"
                  : "block py-2 px-4 hover:bg-gray-700 text-black"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/savings"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black"
                  : "block py-2 px-4 hover:bg-gray-700 text-black"
              }
            >
              Savings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/management"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black"
                  : "block py-2 px-4 hover:bg-gray-700 text-black"
              }
            >
              Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/loan"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black"
                  : "block py-2 px-4 hover:bg-gray-700 text-black"
              }
            >
              Individual Loan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/announcement"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black"
                  : "block py-2 px-4 hover:bg-gray-700 text-black"
              }
            >
              Announcement
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black"
                  : "block py-2 px-4 hover:bg-gray-700 text-black"
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center p-2.5">
          <img src="path/to/logo.png" alt="Logo" className="w-7 h-auto" />
          <span>Welcome to Our Platform!</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

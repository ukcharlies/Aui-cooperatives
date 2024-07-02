import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarButtonProps {
  to: string;
  title: string;
  icon: string;
  activeIcon: string;
  isActive: boolean;
  onClick: () => void;
}

function SidebarButton({
  to,
  title,
  icon,
  activeIcon,
  isActive,
  onClick,
}: SidebarButtonProps) {
  return (
    <NavLink
      to={to}
      className={` text-xl py-2 px-4  hover:bg-[#9754C5] rounded m-4 w-[90%] text-left flex items-center focus:outline-none transition-all ${
        isActive ? "bg-[#9754C5] text-white " : ""
      }`}
      onClick={onClick}
    >
      <img
        src={isActive ? activeIcon : icon}
        alt={title}
        className="h-6 w-6 mr-2"
      />
      {title}
    </NavLink>
  );
}

export default SidebarButton;

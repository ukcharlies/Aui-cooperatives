import React from "react";

interface SidebarButtonProps {
  title: string;
  icon: string;
  activeIcon: string;
  isActive: boolean;
  onClick: () => void;
}

function SidebarButton({
  title,
  icon,
  activeIcon,
  isActive,
  onClick,
}: SidebarButtonProps) {
  return (
    <button
      className={`text-white font-poppins text-xl py-2 px-4  hover:bg-[#9754C5] rounded m-4 w-[85%] text-left flex items-center focus:outline-none ${
        isActive ? "bg-[#9754C5]" : ""
      }`}
      onClick={onClick}
    >
      <img
        src={isActive ? activeIcon : icon}
        alt={title}
        className="h-6 w-6 mr-2"
      />
      {title}
    </button>
  );
}

export default SidebarButton;

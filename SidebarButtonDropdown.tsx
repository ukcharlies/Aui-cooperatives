import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface DropdownItemProps {
  title: string;
  icon: string;
  onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  icon,
  onClick,
}) => (
  <button
    className=" w-[95%] text-white font-poppins font-semibold text-left px-4 py-2 flex hover:underline items-center"
    onClick={onClick}
  >
    <img src={icon} alt={title} className="h-6 w-6 mr-2" />
    {title}
  </button>
);

interface SidebarButtonDropdownProps {
  title: string;
  icon: string;
  activeIcon: string;
  isActive: boolean;
  onClick: () => void;
  dropdownItems: DropdownItemProps[];
}

function SidebarButtonDropdown({
  title,
  icon,
  activeIcon,
  isActive,
  onClick,
  dropdownItems,
}: SidebarButtonDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center">
        <NavLink
          to="/workflows"
          className={`text-white text-xl font-poppins py-2 hover:bg-[#9754C5] px-4 rounded m-4 w-full text-left flex items-center focus:outline-none ${
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
        </NavLink>

        <button
          className="text-white hover:bg-[#9754C5] font-bold py-2 px-1 rounded my-4 w-11 text-left flex items-center focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img
            src={
              isDropdownOpen
                ? "src/assets/open-dropdown.svg"
                : "src/assets/close-dropdown.svg"
            }
            alt={isDropdownOpen ? "close" : "dropdown"}
            className="h-6 w-6 mr-2"
          />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute left-0 w-[95%] rounded shadow-md mt-2 py-1 z-10">
          {dropdownItems.map((item, index) => (
            <DropdownItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarButtonDropdown;

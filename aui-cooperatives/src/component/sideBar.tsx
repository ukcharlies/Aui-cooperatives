import React, { useState } from "react";
import PropTypes from "prop-types"; // Add PropTypes for type-checking
import { NavLink, useLocation } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";
import SidebarButton from "./SidebarButton";
import SidebarButtonDropdown from "./SidebarButtonDropdown";

function Sidebar({ buttons, profilePicture, className }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [activeButton, setActiveButton] = useState(path);

  const handleButtonClick = (buttonTitle) => {
    setActiveButton(buttonTitle);
  };

  return (
    <aside className={`h-screen w-64 fixed top-0 left-0 bg-[#010101] border-r shadow-sm ${className}`}>
      <nav className="h-full flex flex-col bg-[#010101] border-r shadow-sm">
        {/* Logo Styling */}
        <ul className="flex-1 px-3 mt-3">
          {buttons.map((button, index) => (
            button.dropdownItems ? (
              <SidebarButtonDropdown
                key={index}
                title={button.title}
                icon={button.icon}
                activeIcon={button.activeIcon}
                isActive={activeButton === button.title}
                onClick={() => handleButtonClick(button.title)}
                dropdownItems={button.dropdownItems}
              />
            ) : (
              <NavLink to={button.link} key={index}>
                <SidebarButton
                  title={button.title}
                  icon={button.icon}
                  activeIcon={button.activeIcon}
                  isActive={activeButton === button.title}
                  onClick={() => handleButtonClick(button.title)}
                />
              </NavLink>
            )
          ))}
        </ul>
        {profilePicture && (
          <div className="flex flex-col items-center mb-4">
            <ProfilePicture />
          </div>
        )}
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      activeIcon: PropTypes.string.isRequired,
      link: PropTypes.string,
      dropdownItems: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
          onClick: PropTypes.func.isRequired,
        })
      ),
    })
  ).isRequired,
  profilePicture: PropTypes.bool,
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  profilePicture: true,
  className: "",
};

export default Sidebar;

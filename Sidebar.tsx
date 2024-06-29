import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import SidebarButton from "./SidebarButton";
import SidebarButtonDropdown from "./SidebarButtonDropdown";
import { NavLink, Router, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [activeButton, setActiveButton] = useState(path);

  return (
    <aside className="h-screen w-64 flex fixed top-0 left-0 bg-[#010101] border-r shadow-sm">
      <nav className="h-full flex flex-col bg-[#010101] border-r shadow-sm">
        {/* <div className=" p-4 pb-2 flex justify-between items-center">
          <Logo />
        </div> */} styling for the logo
        <ul className=" flex-1 px-3 mt-3 ">
          <NavLink to="/dashboard">
            <SidebarButton
              title="Dashboard"
              icon="src/assets/DashboardIcon.svg"
              activeIcon="src/assets/DashboardIcon-active.svg"
              isActive={activeButton === "Dashboard"}
              onClick={() => setActiveButton("Dashboard")}
            />
          </NavLink>

          <NavLink to="/savings">
            <SidebarButton
              title="Savings"
              icon="src/assets/SavingsIcon.svg"
              activeIcon="src/assets/SavingsIcon-active.svg"
              isActive={activeButton === "Savings"}
              onClick={() => setActiveButton("Savings")}
            />
          </NavLink>

          <NavLink to="/management">
            <SidebarButton
              title="Management"
              icon="src/assets/ManagementIcon.svg"
              activeIcon="src/assets/ManagementIcon-active.svg"
              isActive={activeButton === "Management"}
              onClick={() => setActiveButton("Management")}
            />
          </NavLink>

          <NavLink to="/individual-loan">
            <SidebarButton
              title="Individual Loan"
              icon="src/assets/IndividualLoanIcon.svg"
              activeIcon="src/assets/IndividualLoanIcon-active.svg"
              isActive={activeButton === "Individual Loan"}
              onClick={() => setActiveButton("Individual Loan")}
            />
          </NavLink>

          <NavLink to="/announcement">
            <SidebarButton
              title="Announcement"
              icon="src/assets/AnnouncementIcon.svg"
              activeIcon="src/assets/AnnouncementIcon-active.svg"
              isActive={activeButton === "Announcement"}
              onClick={() => setActiveButton("Announcement")}
            />
          </NavLink>

          <NavLink to="/security">
            <SidebarButton
              title="Security"
              icon="src/assets/SecurityIcon.svg"
              activeIcon="src/assets/SecurityIcon-active.svg"
              isActive={activeButton === "Security"}
              onClick={() => setActiveButton("Security")}
            />
          </NavLink>

          <NavLink to="/settings">
            <SidebarButton
              title="Settings"
              icon="src/assets/SettingsIcon.svg"
              activeIcon="src/assets/SettingsIcon-active.svg"
              isActive={activeButton === "Settings"}
              onClick={() => setActiveButton("Settings")}
            />
          </NavLink>

          <SidebarButtonDropdown
            title="Workflows"
            icon="src/assets/WorkflowsIcon.svg"
            activeIcon="src/assets/WorkflowsIcon-active.svg"
            isActive={activeButton === "Workflows"}
            onClick={() => setActiveButton("Workflows")}
            dropdownItems={[
              {
                title: "All Workflows",
                icon: "src/assets/AllWorkflowsIcon.svg",
                onClick: () => console.log("Option 1"),
              },
              {
                title: "New Workflow",
                icon: "src/assets/NewWorkflowIcon.svg",
                onClick: () => console.log("Option 2"),
              },
            ]}
          />
        </ul>

        <div className="flex flex-col items-center mb-4 ">
          <ProfilePicture />
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;

{/* <NavLink to="/dashboard">
  <SidebarButton
    title="Dashboard"
    icon="src/assets/DashboardIcon.svg"
    activeIcon="src/assets/DashboardIcon-active.svg"
    isActive={activeButton === "Dashboard"}
    onClick={() => setActiveButton("Dashboard")}
  />
</NavLink>

<NavLink to="/savings">
  <SidebarButton
    title="Savings"
    icon="src/assets/SavingsIcon.svg"
    activeIcon="src/assets/SavingsIcon-active.svg"
    isActive={activeButton === "Savings"}
    onClick={() => setActiveButton("Savings")}
  />
</NavLink>

<NavLink to="/management">
  <SidebarButton
    title="Management"
    icon="src/assets/ManagementIcon.svg"
    activeIcon="src/assets/ManagementIcon-active.svg"
    isActive={activeButton === "Management"}
    onClick={() => setActiveButton("Management")}
  />
</NavLink>

<NavLink to="/individual-loan">
  <SidebarButton
    title="Individual Loan"
    icon="src/assets/IndividualLoanIcon.svg"
    activeIcon="src/assets/IndividualLoanIcon-active.svg"
    isActive={activeButton === "Individual Loan"}
    onClick={() => setActiveButton("Individual Loan")}
  />
</NavLink>

<NavLink to="/announcement">
  <SidebarButton
    title="Announcement"
    icon="src/assets/AnnouncementIcon.svg"
    activeIcon="src/assets/AnnouncementIcon-active.svg"
    isActive={activeButton === "Announcement"}
    onClick={() => setActiveButton("Announcement")}
  />
</NavLink>

<NavLink to="/security">
  <SidebarButton
    title="Security"
    icon="src/assets/SecurityIcon.svg"
    activeIcon="src/assets/SecurityIcon-active.svg"
    isActive={activeButton === "Security"}
    onClick={() => setActiveButton("Security")}
  />
</NavLink>

<NavLink to="/settings">
  <SidebarButton
    title="Settings"
    icon="src/assets/SettingsIcon.svg"
    activeIcon="src/assets/SettingsIcon-active.svg"
    isActive={activeButton === "Settings"}
    onClick={() => setActiveButton("Settings")}
  />
</NavLink> */}
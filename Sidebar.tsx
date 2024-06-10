import React, { useState } from "react";
import Logo from "./Logo";
import ProfilePicture from "./ProfilePicture";
import SidebarButton from "./SidebarButton";
import SidebarButtonDropdown from "./SidebarButtonDropdown";
import UpgradeButton from "./UpgradeButton";
import Line from "./Line";
import { NavLink, Router, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [activeButton, setActiveButton] = useState(path);

  return (
    <aside className="h-screen w-64 flex fixed top-0 left-0 bg-[#010101] border-r shadow-sm">
      <nav className="h-full flex flex-col bg-[#010101] border-r shadow-sm">
        <div className=" p-4 pb-2 flex justify-between items-center">
          <Logo />
        </div>
        <ul className=" flex-1 px-3 mt-3 ">
          <NavLink to="/">
            <SidebarButton
              title="Chat"
              icon="src/assets/ChatIcon.svg"
              activeIcon="src/assets/ChatIcon-active.svg"
              isActive={activeButton === "Chat"}
              onClick={() => setActiveButton("Chat")}
            />
          </NavLink>

          <NavLink to="/projects">
            <SidebarButton
              title="My Projects"
              icon="src/assets/ProjectsIcon.svg"
              activeIcon="src/assets/ProjectsIcon-active.svg"
              isActive={activeButton === "My Projects"}
              onClick={() => setActiveButton("My Projects")}
            />
          </NavLink>
          <NavLink to="/infobase">
            <SidebarButton
              title="Info Base"
              icon="src/assets/InfobaseIcon.svg"
              activeIcon="src/assets/InfobaseIcon-active.svg"
              isActive={activeButton === "Info Base"}
              onClick={() => setActiveButton("Info Base")}
            />
          </NavLink>

          <NavLink to="/brandvoice">
            <SidebarButton
              title="Brand Voice"
              icon="src/assets/BrandvoiceIcon.svg"
              activeIcon="src/assets/BrandvoiceIcon-active.svg"
              isActive={activeButton === "Brand Voice"}
              onClick={() => setActiveButton("Brand Voice")}
            />
          </NavLink>
          <NavLink to="/templates">
            <SidebarButton
              title="Templates"
              icon="src/assets/TemplatesIcon.svg"
              activeIcon="src/assets/TemplatesIcon-active.svg"
              isActive={activeButton === "Templates"}
              onClick={() => setActiveButton("Templates")}
            />
          </NavLink>

          <NavLink to="/tools">
            <SidebarButton
              title="Tools"
              icon="src/assets/ToolsIcon.svg"
              activeIcon="src/assets/ToolsIcon-active.svg"
              isActive={activeButton === "Tools"}
              onClick={() => setActiveButton("Tools")}
            />
          </NavLink>

          <Line />
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
          <UpgradeButton />
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;

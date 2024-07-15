import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import UserProfile from "./UserProfile";
import SidebarTop from "./SidebarTop";
import { User } from "../utils/api";

export interface SidebarProps {
  userName: string;
  userProfilePicture: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [activeButton, setActiveButton] = useState(path);

  const user: User = JSON.parse(localStorage.getItem("user") as string) as User;
  return (
    <aside className="h-screen w-64 flex fixed top-0 left-0 shadow-sm">
      <nav className="h-full flex flex-col justify-between shadow-sm">
        <SidebarTop />
        <div className="flex flex-col justify-between">
          <SidebarButton
            to={"/dashboard"}
            title={"Dashboard"}
            icon={"./src/images/Dashboard.png"}
            activeIcon={"./src/images/Dashboard.png"}
            isActive={activeButton === "Dashboard"}
            onClick={() => setActiveButton("Dashboard")}
          />
          <SidebarButton
            to={"/savings"}
            title={"Savings"}
            icon={"./src/images/savings.png"}
            activeIcon={"./src/images/savings.png"}
            isActive={activeButton === "Savings"}
            onClick={() => setActiveButton("Savings")}
          />
          <SidebarButton
            to={"/management"}
            title={"Management"}
            icon={"./src/images/management.png"}
            activeIcon={"./src/images/management.png"}
            isActive={activeButton === "Management"}
            onClick={() => setActiveButton("Management")}
          />
          <SidebarButton
            to={"/loan"}
            title={"Individual Loan"}
            icon={"./src/images/loan.png"}
            activeIcon={"./src/images/loan.png"}
            isActive={activeButton === "Loan"}
            onClick={() => setActiveButton("Loan")}
          />
          <SidebarButton
            to={"/announcement"}
            title={"Announcement"}
            icon={"./src/images/announcement.png"}
            activeIcon={"./src/images/announcement.png"}
            isActive={activeButton === "Announcement"}
            onClick={() => setActiveButton("Announcement")}
          />
          <SidebarButton
            to={"/settings"}
            title={"Settings"}
            icon={"./src/images/setting.png"}
            activeIcon={"./src/images/setting.png"}
            isActive={activeButton === "Settings"}
            onClick={() => setActiveButton("Settings")}
          />
        </div>
        {user && (
          <UserProfile
            username={user.username}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            department={user.department}
            address={user.address}
            phone={user.phone}
            employment_number={user.employment_number}
            is_verified={user.is_verified}
          />
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;

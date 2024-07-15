import React from "react";
import { SidebarProps } from "./sideBar";
import { User } from "../utils/api";

export default function UserProfile(user: User) {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center p-3">
      <div className="flex flex-row items-center space-x-1">
        <img
          src={`./src/images/dummy profile.jpeg`}
          alt="User pfp"
          className="size-14 rounded-full"
        />
        <div className="flex flex-col space-y-[1px] mt-auto">
          <p>{user.first_name + ` ` + user.last_name}</p>
          <small>{user.email}</small>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 bg-[#6D2B2A] text-white py-2 px-4 rounded hover:bg-opacity-75"
      >
        Logout
      </button>
    </div>
  );
}

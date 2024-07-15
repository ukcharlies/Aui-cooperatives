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
    <div className="flex flex-col items-center p-3 bg-blue text-white">
      <div className="flex flex-row items-center space-x-1 mr-auto">
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
        className=" bg-gray shadow-md text-white p-2 rounded hover:bg-opacity-75 active:scale-95 transition-all flex flex-row space-x-1 mr-auto m-2"
      >
        <small className="text-xs">Logout</small>
        <img width={20} height={20} src="./src/images/logout.svg" />
      </button>
    </div>
  );
}

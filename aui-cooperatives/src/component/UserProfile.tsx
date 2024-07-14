import React from "react";
import { SidebarProps } from "./sideBar";

export default function UserProfile({
  userProfilePicture,
  userName,
}: SidebarProps) {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = ('/');
  };

  return (
    <div className="flex flex-col items-center p-3">
      <div className="flex flex-row items-center space-x-1">
        <img
          src={userProfilePicture}
          alt="User"
          className="size-14 rounded-full"
        />
        <div className="flex flex-col space-y-[1px] mt-auto">
          <p>{userName}</p>
          <small>{`user@email.com`}</small>
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

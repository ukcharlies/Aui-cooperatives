import React from "react";
import { SidebarProps } from "./sideBar";

export default function UserProfile({
  userProfilePicture,
  userName,
}: SidebarProps) {
  return (
    <div className="flex flex-row items-center space-x-1 p-3">
      <img
        src={userProfilePicture}
        alt="User"
        className=" size-14 rounded-full"
      />
      <div className="flex flex-col space-y-[1px] mt-auto">
        <p>{userName}</p>
        <small>{`user@email.com`}</small>
      </div>
    </div>
  );
}

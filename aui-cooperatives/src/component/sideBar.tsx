// import React from 'react';
// import { NavLink } from 'react-router-dom'; 

// interface SidebarProps {
//   userName: string;
//   userProfilePicture: string;
// }

// const Sidebar: React.FC<SidebarProps> = ({ userName, userProfilePicture }) => {
//   return (
//     <div className="w-[250px] h-screen fixed bg-gray-800 text-white">
//       <div className="flex items-center p-2.5">
//         <img src={userProfilePicture} alt="User" className="w-10 h-10 rounded-full" />
//         <span>{userName}</span>
//       </div>
//       <ul className="list-none p-0">
//         <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500' : 'block py-2 px-4 hover:bg-gray-700'}>Dashboard</NavLink></li>
//         <li>
//           <NavLink to="/savings" className={({ isActive }) => isActive ? 'block py-2 px-4 hover:bg-gray-700 border-b-2  border-blue-500' : 'block py-2 px-4 hover:bg-gray-700'}>
//             Savings
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/savings" className={({ isActive }) => isActive ? 'block py-2 px-4 hover:bg-gray-700 border-b-2  border-blue-500' : 'block py-2 px-4 hover:bg-gray-700'}>
//             Management
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/savings" className={({ isActive }) => isActive ? 'block py-2 px-4 hover:bg-gray-700 border-b-2  border-blue-500' : 'block py-2 px-4 hover:bg-gray-700'}>
//             Individual Loan
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/savings" className={({ isActive }) => isActive ? 'block py-2 px-4 hover:bg-gray-700 border-b-2  border-blue-500' : 'block py-2 px-4 hover:bg-gray-700'}>
//             Announcement
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/savings" className={({ isActive }) => isActive ? 'block py-2 px-4 hover:bg-gray-700 border-b-2  border-blue-500' : 'block py-2 px-4 hover:bg-gray-700'}>
//             Settings
//           </NavLink>
//         </li>
//       </ul>
//       <div className="flex items-center p-2.5">
//         <img src="path/to/logo.png" alt="Logo" className="w-7 h-auto" />
//         <span>Welcome to Our Platform!</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  userName: string;
  userProfilePicture: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, userProfilePicture }) => {
  return (
    <div className="w-[250px] h-screen fixed bg-gray-800 text-black">
      <div className="flex items-center p-2.5">
        <img src={userProfilePicture} alt="User" className="w-10 h-10 rounded-full" />
        <span>{userName}</span>
      </div>
      <ul className="list-none p-0">
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive? 'block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black' : 'block py-2 px-4 hover:bg-gray-700 text-black'}>Dashboard</NavLink></li>
        <li><NavLink to="/savings" className={({ isActive }) => isActive? 'block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black' : 'block py-2 px-4 hover:bg-gray-700 text-black'}>Savings</NavLink></li>
        <li><NavLink to="/management" className={({ isActive }) => isActive? 'block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black' : 'block py-2 px-4 hover:bg-gray-700 text-black'}>Management</NavLink></li>
        <li><NavLink to="/loanAnnouncement" className={({ isActive }) => isActive? 'block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black' : 'block py-2 px-4 hover:bg-gray-700 text-black'}>Individual Loan</NavLink></li>
        <li><NavLink to="/security" className={({ isActive }) => isActive? 'block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black' : 'block py-2 px-4 hover:bg-gray-700 text-black'}>Announcement</NavLink></li>
        <li><NavLink to="/settings" className={({ isActive }) => isActive? 'block py-2 px-4 hover:bg-gray-700 border-b-2 border-blue-500 text-black' : 'block py-2 px-4 hover:bg-gray-700 text-black'}>Settings</NavLink></li>
      </ul>
      <div className="flex items-center p-2.5">
        <img src="path/to/logo.png" alt="Logo" className="w-7 h-auto" />
        <span>Welcome to Our Platform!</span>
      </div>
    </div>
  );
};

export default Sidebar;
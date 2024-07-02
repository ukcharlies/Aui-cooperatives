import Sidebar from "./component/sideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Management from "./pages/Management";
import Savings from "./pages/Savings";
import Announcement from "./pages/Announcement";
import Security from "./pages/Security";
import IndividualLoan from "./pages/ILoan";

function App() {
  const userName = "Ukachi Charles";
  const userProfilePicture = "./src/images/dummy profile.jpeg";

  return (
    <div className=" flex h-screen flex-row min-w-screen">
      <Sidebar userName={userName} userProfilePicture={userProfilePicture} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/management" element={<Management />} />
        <Route path="/loan" element={<IndividualLoan />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/security" element={<Security />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

// function App() {

//   return (
//     <div className= "App">
//       <Tabs />
//     </div>
//   );
// }

export default App;

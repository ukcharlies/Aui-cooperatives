import React from 'react';
import Sidebar from './component/sideBar';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const userName = "Ukachi Charles";
  const userProfilePicture = "./src/images/dummy profile.jpeg";

  return (
   
    <Router>
    <div className="App">
      <Sidebar userName={userName} userProfilePicture={userProfilePicture} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/management" element={<Management />} />
        <Route path="/loanAnnouncement" element={<LoanAnnouncement />} />
        <Route path="/security" element={<Security />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  </Router>
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

import React from 'react';
import Sidebar from './component/sideBar';

function App() {
  const userName = "Ukachi Charles";
  const userProfilePicture = "aui-cooperatives/src/images/dummy profile.jpeg";

  return (
    <div className="App">
      <Sidebar userName={userName} userProfilePicture={userProfilePicture} />
      
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

import React, { useDeferredValue, useState } from 'react';
import LoginPage from '../pages/Login'
import RegistrationPage from '../pages/Regristration';


function Tabs() {
const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (

    <div className=" h-screen flex justify-center items-center  bg-cover bg-center" style={{ backgroundImage: `url('./src/images/backgroung image.jpeg`}}>
    <div className="bg-black px-8 py-6 rounded-3xl">
    <div className='flex items-center mb-5'>
      <img src=".\src\images\AUI-logo.png" alt="Aui logo" className='w-18 h-14 mr-1' />
      <h4 className='text-lg font-bold text-white'>Cooperatives</h4>
    </div>
    <div className='flex items-center justify-around'>
      <h4 className="text-sm font-bold mr-10 cursor-pointer text-white relative group"  onClick={() => handleTabChange('login')} >
        Login
        <span className="absolute left-0 top-full w-full h-1 bg-yellow transform scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100 style={{marginTop: '4px'}}"></span>
      </h4>
      <h4 className="text-sm font-bold mr-4 cursor-pointer relative text-white group"  onClick={() => handleTabChange('registration')}>
         Sign Up
         <span className="absolute left-0 top-full w-full h-1 bg-yellow transform scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100 style={{marginTop: '4px'}}"></span>
      </h4>
    </div>
    <div>
      {activeTab === 'login' && <LoginPage />}
      {activeTab === 'registration' && <RegistrationPage />}
  </div>
</div>
</div>

  );
}


export default Tabs;


import React from "react";

export default function Savings() {
  return (
    <div className="max-w-4xl mx-auto p-3 ml-64 w-full bg-[#FCFCFC] mt-10">
      {/* Title section */}
      <div className="flex items-center mb-6">
        <img src="./src/images/savings.png" alt="Savings Overview" className="w-12 h-12 mr-4 invert" />
        <h1 className="text-xl font-bold">Savings Overview</h1>
      </div>
      {/* Stacked cards */}
      <div className="space-y-6">
        {/* First card */}
        <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
          <div className="flex justify-between items-center mb-4">
            {/* Available Savings */}
            <div className="text-center flex-1">
              <span className="block text-lg" style={{ color: '#8996A4' }}>Available Savings</span>
              <span className="block text-lg font-semibold">N1,000,000.00</span>
            </div>
            <div className="h-16 w-px" style={{ backgroundColor: '#D9D9D9', margin: '0 1rem' }}></div> {/* Separator */}
            {/* Total Contributions */}
            <div className="text-center flex-1">
              <span className="block text-lg" style={{ color: '#8996A4' }}>Total Contributions</span>
              <span className="block text-lg font-semibold">N50,000</span>
            </div>
            <div className="h-16 w-px" style={{ backgroundColor: '#D9D9D9', margin: '0 1rem' }}></div> {/* Separator */}
            {/* Outstanding Bills */}
            <div className="text-center flex-1">
              <span className="block text-lg" style={{ color: '#8996A4' }}>Outstanding Bills</span>
              <span className="block text-lg font-semibold">N10,000</span>
            </div>
          </div>
        </div>
        {/* Middle card (bigger in height) */}
        <div className="bg-white rounded-lg shadow-lg mb-4 p-6 h-64">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#785D0B] rounded-lg flex flex-col justify-between p-4">
              <div className="flex justify-between items-center">
                <div className="text-white text-lg font-semibold">CraftworkBank</div>
                <img src="./src/images/icons-wifi-on.png" alt="Logo" className="w-5 h-5 transform " />
              </div>
              <div className="text-white text-sm mt-2">Henry Richardson</div>
              <div className="text-white text-lg mt-2">4567 **** **** 4501</div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-white text-base">04 / 23</div>
                <div className="flex items-center">
                  <img src="./src/images/mastercard logo.png" alt="Mastercard Logo"  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second card */}
        <div className="bg-white rounded-lg shadow-lg mb-4 p-6 h-32">
          {/* This card is empty */}
        </div>
      </div>
    </div>
  );
}

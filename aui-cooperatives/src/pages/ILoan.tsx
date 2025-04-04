import React, { useState } from "react";

export default function Loans() {

  return (
    <div className="max-w-4xl mx-auto p-3 ml-64 w-full bg-[#FCFCFC] mt-10">
      {/* Title section */}
      <div className="flex items-center mb-6">
        <img src="./src/images/loan.png" alt="Savings Overview" className="w-12 h-12 mr-4 invert" />
        <h1 className="text-xl font-bold">Loans Overview</h1>
      </div>
      {/* Stacked cards */}
      <div className="space-y-6">
        {/* First card */}
        <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
          <div className="flex justify-between items-center mb-4">
            {/* Available Savings */}
            <div className="text-center flex-1">
              <span className="block text-lg" style={{ color: '#8996A4' }}>Available Loan</span>
              <span className="block text-lg font-semibold">N100,000.00</span>
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
        <div>
          {/* Second stacked card */}
          
        </div>
      </div>
    </div>
  );
};
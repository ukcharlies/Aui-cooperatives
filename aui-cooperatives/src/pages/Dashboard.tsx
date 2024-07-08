// src/DashboardPage.js
import React from "react";
import News from "../component/News";

const DashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-3 ml-64 w-full bg-[#FCFCFC]">
      <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
        <div className="flex items-center justify-between mb-4">
          {/* User details */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <span className="text-sm text-white border border-[#3E3E3E] bg-[#3E3E3E] rounded-full px-2 py-1 mt-1 inline-block">
                Old Member
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {/* Membership role */}
          <div className="text-left">
            <span className="block text-lg font-bold">Membership Role:</span>
            <span className="block text-xs text-gray-600">Active Member</span>
          </div>
          {/* Total savings */}
          <div className="text-right">
            <span className="text-sm text-gray-600">Total Savings</span>
            <h3 className="text-3xl font-bold">$25,000</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Group of smaller square cards */}
        <News
          thumbnail={"./src/images/test-image2.jpeg"}
          title={"News Title"}
          desc={
            "Brief content for the news. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />

        <News
          thumbnail={"./src/images/test-image1.jpeg"}
          title={"News Title"}
          desc={
            "Brief content for the news. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
    </div>
  );
};

export default DashboardPage;

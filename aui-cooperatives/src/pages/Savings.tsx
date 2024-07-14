import React, { useState } from "react";

export default function Savings() {
  const [deactivateCard, setDeactivateCard] = useState(false);

  const handleToggle = () => {
    setDeactivateCard(!deactivateCard);
  };
  const [expectedSalary, setExpectedSalary] = useState<number>(0);
  const [monthlySavings, setMonthlySavings] = useState<number>(1000);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpectedSalary(Number(e.target.value));
  };

  const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlySavings(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to submit the form goes here, e.g., sending data to the server.
    console.log('Form submitted', { expectedSalary, monthlySavings });
    setIsVerified(true);
  };

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
        
        <div className="bg-white rounded-lg shadow-lg mb-4 p-6 h-auto">
      <div className="w-full">
        <div className="border rounded-lg shadow-lg p-6 mb-4">
          <header className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">Savings Page</h5>
          </header>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">
                Enter Expected Salary
              </h2>
              <input
                type="number"
                value={expectedSalary}
                onChange={handleSalaryChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#CCC6C0]"
                placeholder="Enter expected salary"
              />
            </div>
            <div className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">
                Select Monthly Savings Deposit
              </h2>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlySavings}
                onChange={handleSavingsChange}
                className="w-full"
              />
              <p className="text-lg mt-2">₦{monthlySavings.toLocaleString()}</p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-[#785D0B] text-white font-semibold rounded hover:bg-[#614b09]"
            >
              Submit
            </button>
            {isVerified && (
              <div className="mt-4 text-green-600 font-semibold">
                <p>✔ Submission Verified</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
        {/* Middle card (bigger in height) */}
        <div className="bg-white rounded-lg shadow-lg mb-4 p-6 h-auto relative">
          <div className="relative w-full h-full">
            {deactivateCard ? (
              <div className="w-full h-full bg-gray-100 rounded-lg flex flex-col justify-center items-center p-4">
                <div className="text-center text-red-500 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m0-4h.01M12 12h.01M12 6.938a9 9 0 110 10.124m0-10.124a9 9 0 100 10.124"
                    ></path>
                  </svg>
                  <p>Your card is deactivated</p>
                  <p>Please activate your card to continue using it.</p>
                </div>
                <button
                  onClick={handleToggle}
                  className="bg-[#785D0B] text-white py-1 px-2 rounded"
                >
                  Activate Card
                </button>
              </div>
            ) : (
              <>
                <div className={`w-full h-1/2 bg-[#785D0B] rounded-lg flex flex-col justify-between p-4`}>
                  <div className="flex justify-between items-center">
                    <div className="text-white text-lg font-semibold">CraftworkBank</div>
                    <img src="./src/images/icons-wifi-on.png" alt="Logo" className="w-5 h-5 transform" />
                  </div>
                  <div className="text-white text-sm mt-2">Ukachi Charles</div>
                  <div className="text-white text-lg mt-2">4567 **** **** 4501</div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-white text-base">04 / 23</div>
                    <div className="flex items-center">
                      <img src="./src/images/mastercard logo.png" alt="Mastercard Logo" />
                    </div>
                  </div>
                </div>
                {/* Conditional styling for the Deactivate button */}
                <button
                  onClick={handleToggle}
                  className={`absolute bottom-80 right-4 bg-[#785D0B] text-white py-1 px-2 rounded ${deactivateCard ? 'top-30' : ''}`}
                >
                  {deactivateCard ? 'Activate Card' : 'Deactivate Card'}
                </button>
              </>
            )}
            {!deactivateCard && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardholderName">
                      Cardholder Name
                    </label>
                    <input
                      id="cardholderName"
                      type="text"
                      placeholder="John Doe"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex space-x-4 mb-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                        Expiration Date
                      </label>
                      <input
                        id="expiryDate"
                        type="month"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                        CVV
                      </label>
                      <input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#785D0B] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Initiate Payment
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const ManagementPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      department: "Engineering",
      employmentNumber: "12345",
      address: "123 Main St, Cityville",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      department: "Marketing",
      employmentNumber: "67890",
      address: "456 Elm St, Townsville",
      phoneNumber: "987-654-3210",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      department: "Sales",
      employmentNumber: "11223",
      address: "789 Oak St, Villagetown",
      phoneNumber: "321-654-9870",
      email: "alice.johnson@example.com",
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      department: "HR",
      employmentNumber: "44556",
      address: "101 Pine St, Hamletville",
      phoneNumber: "654-321-0987",
      email: "bob.brown@example.com",
    },
    {
      id: 5,
      firstName: "Charlie",
      lastName: "Davis",
      department: "Finance",
      employmentNumber: "77889",
      address: "202 Birch St, Metropolis",
      phoneNumber: "789-012-3456",
      email: "charlie.davis@example.com",
    },
  ]);

  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

  const toggleExpandUser = (userId: number) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  const verifyUser = (userId: number) => {
    // Logic to verify user goes here
    console.log(`Verifying user with ID: ${userId}`);
  };

  return (
    <div className="ml-64 w-full bg-white flex items-center justify-center p-4">
      <div className="w-full">
        <div className="border rounded-lg shadow-lg p-6 mb-4">
          <header className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">
              New Registered Users ({users.length})
            </h5>
          </header>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="border p-4 rounded shadow flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpandUser(user.id)}
              >
                <div className="flex-1">
                  <h2 className="text-xl font-semibold break-words">
                    {user.lastName} {user.firstName} wants to join the committee
                  </h2>
                  <p className="text-sm mt-2 break-words">{user.email}</p>
                </div>
                <button
                  className="px-4 py-2 bg-[#CCC6C0] text-black font-semibold rounded-full hover:bg-gray-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    verifyUser(user.id);
                  }}
                >
                  Verify
                </button>
              </div>
            ))}
          </div>
        </div>
        {expandedUserId && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setExpandedUserId(null)}
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-1/3"
              onClick={(e) => e.stopPropagation()}
            >
              {users
                .filter((user) => user.id === expandedUserId)
                .map((user) => (
                  <div key={user.id}>
                    <h2 className="text-2xl font-bold mb-4">
                      {user.lastName} {user.firstName}
                    </h2>
                    <p><strong>Department:</strong> {user.department}</p>
                    <p><strong>Employment Number:</strong> {user.employmentNumber}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagementPage;

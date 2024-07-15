import React, { useEffect, useState } from "react";
import { getUnVUser } from "../utils/api";

export interface UnverifiedUser {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  employmentNumber: string;
  address: string;
  phoneNumber: string;
  email: string;
}
const ManagementPage = () => {
  const [users, setUsers] = useState<UnverifiedUser[] | null>();

  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

  const toggleExpandUser = (userId: number) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  const verifyUser = (userId: number) => {
    // Logic to verify user goes here
    console.log(`Verifying user with ID: ${userId}`);
  };

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const uUsers = await getUnVUser();
        setUsers(uUsers as UnverifiedUser[]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="ml-64 w-full bg-white flex items-center justify-center p-4">
      {error && (
        <h1 className=" text-2xl text-red-500 text-center font-bold">
          {error}
        </h1>
      )}
      {loading && (
        <h1 className=" text-2xl text-blue text-center font-bold">
          Loading unverified users.
        </h1>
      )}
      {users ? (
        <>
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
                    className="border p-4 rounded shadow flex justify-between items-center cursor-pointer active:scale-95 transition-all md:hover:border-2 md:hover:border-blue"
                    onClick={() => toggleExpandUser(user.id)}
                  >
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold break-words">
                        {user.lastName} {user.firstName} wants to join the
                        committee
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
                        <p>
                          <strong>Department:</strong> {user.department}
                        </p>
                        <p>
                          <strong>Employment Number:</strong>{" "}
                          {user.employmentNumber}
                        </p>
                        <p>
                          <strong>Address:</strong> {user.address}
                        </p>
                        <p>
                          <strong>Phone Number:</strong> {user.phoneNumber}
                        </p>
                        <p>
                          <strong>Email:</strong> {user.email}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <h1 className=" text-2xl text-blue text-center font-bold">
          No new users
        </h1>
      )}
    </div>
  );
};

export default ManagementPage;

import React, { useState } from "react";
import { login, logserializier } from "../utils/api";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      if (result.access) {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col mt-8 w-full "
    >
      <div className="flex justify-center items-center flex-col w-full ">
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            className="outline-none bg-transparent text-white"
          />
        </div>
        <div className="p-3 border border-gray w-full  rounded-full mb-4">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className=" outline-none bg-transparent text-white"
          />
        </div>
        <div>
          <button className="w-full px-6 py-2 bg-blue text-white rounded-full active:scale-95 transition-all">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;

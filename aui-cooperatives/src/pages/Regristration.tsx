import React, { useState } from "react";
import { register, regserializier } from "../utils/api";

const RegistrationPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [employmentNumber, setEmploymentNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState<regserializier | undefined>();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForm({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      department: department,
      employment_number: employmentNumber,
      address: address,
      password: password,
    });
    try {
      const result = await register(form as regserializier);
      if (result.access) {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col mt-8 w-full"
    >
      <div className="flex justify-center items-center flex-col w-full">
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className=" outline-none bg-transparent text-white"
          />
        </div>
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className=" outline-none bg-transparent text-white"
          />
        </div>
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Department"
            className="w-full outline-none bg-transparent text-white"
          />
        </div>
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={employmentNumber}
            onChange={(e) => setEmploymentNumber(e.target.value)}
            placeholder="Employment No"
            className=" outline-none bg-transparent text-white"
          />
        </div>
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Contact Address"
            className=" outline-none bg-transparent text-white"
          />
        </div>
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telephone Number"
            className=" outline-none bg-transparent text-white"
          />
        </div>
        <div className=" w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="outline-none bg-transparent text-white"
          />
        </div>
        <div className="w-full p-3 border border-gray rounded-full mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className=" outline-none bg-transparent text-white"
          />
        </div>
        <div>
          <button className="w-full px-6 py-2 bg-blue text-white rounded-full active:scale-95 transition-all">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationPage;

import React, { useState } from "react";
import Tabs from "../component/Tabs";

function Login() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const handleUsernameChange = (props: any) => {
    setusername(props.target.value);
    console.log(setusername);
  };
  // export default handleUsernameChange;

  const handlePasswordChange = (props: any) => {
    setpassword(props.target.value);
  };
  // export default handlePasswordChange;
  const handleSubmit = (props: any) => {
    props.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex item-center justify-center flex-col mt-8"
    >
      <div className="flex justify-center items-center flex-col">
        <div className="p-3 border border-gray rounded-full mb-4">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Email"
            className="w-full outline-none bg-transparent text-ash"
          />
        </div>
        <div className="p-3 border border-gray rounded-full mb-4">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="w-full outline-none bg-transparent text-white"
          />
        </div>
        <div>
          <button className="w-full px-6 py-2 bg-blue text-white rounded-3xl">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
export default Login;

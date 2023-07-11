import { React, usestate } from "react";

const register = () => {
  const [userName, setUserName] = usestate("");
  const [password, setPassword] = usestate("");

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12">
        <input
          type={userName}
          onChange={(ev) => setUserName(ev.target.value)}
          placeholder="Username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          type={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="Password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {" "}
          Register{" "}
        </button>
      </form>
    </div>
  );
};

export default register;

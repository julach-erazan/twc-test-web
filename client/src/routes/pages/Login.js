import React from "react";
import Loginform from "../admin/Loginform";

const Login = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center overflow-hidden">
      <div className="w-[50%] h-full ">
        <Loginform />
      </div>
      <div className="w-[1502px] h-[1502px] rounded-[50%] fixed z-[10] bg-[#083F46] top-[-367px] left-[-706px]"></div>
      <div
        className="
          w-[50%] h-full relative z-[-10] bg-[url('/src/Images/bg.jpg')] bg-contain
          after:content-['']
          after:w-screen after:h-screen after:bg-[#ffffffbe]
          after:absolute
          after:z-10
          after:top-0
      "
      ></div>
    </div>
  );
};

export default Login;

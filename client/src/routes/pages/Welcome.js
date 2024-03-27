import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

const Welcome = ({ onLogOut }) => {
  return (
    <div
      className="
        w-full h-full bg-[url('/src/Images/bg.jpg')] bg-contain text-[#fff]

        after:content-['']
        after:w-screen after:h-screen after:bg-[#ffffffbe]
        after:absolute
        after:z-10
        after:top-0
    "
    >
      <div
        className="
        w-[1763px] h-[1000px] bg-[#083F46] rounded-[50%] rotate-[25deg] fixed z-20 top-[-180px] left-[-200px]
        flex justify-center items-center
      "
      >
        <div className="w-[50%] h-[50%] rotate-[-25deg]">
          <div className="w-[150px] flex flex-col justify-center items-left">
            <img src="/Images/logo.png" alt="Logo" className="w-[100px]" />
            <h1 className="text-[30px]">
              <span className="font-bold">contacts</span> portal
            </h1>
          </div>
          <div className="w-full h-[70%] flex flex-col justify-center items-left">
            <h1 className="text-[50px] font-bold">Welcome,</h1>
            <h2 className="text-[30px]">
              This is where your contacts will live. Click the button below to
              add a new contact.
            </h2>

            <a
              href="/contacts"
              className="
               w-[200px] h-[40px] font-semibold rounded-[20px] border-[2px] border-[#fff] hover:text-[#083F46] hover:bg-[#fff] my-[50px]
              flex justify-center items-center
            "
            >
              <h1>add your first contact</h1>
            </a>
          </div>
          <div className="w-full h-[10%] flex justify-end items-center">
            <button
              onClick={() => onLogOut()}
              className="w-[100px] flex justify-between items-center"
            >
              <RiLogoutCircleLine className="text-[30px] font-semibold" />
              <u>
                <h1 className="text-[20px] font-semibold">logout</h1>
              </u>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

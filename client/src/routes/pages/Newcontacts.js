import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

const Newcontacts = () => {
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
            omoi
          </div>
          <div className="w-full h-[10%] flex justify-end items-center">
            <button>
              <a
                href="/login"
                className="w-[100px] flex justify-between items-center"
              >
                <RiLogoutCircleLine className="text-[30px] font-semibold" />
                <u>
                  <h1 className="text-[20px] font-semibold">logout</h1>
                </u>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcontacts;

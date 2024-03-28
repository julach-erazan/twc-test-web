import React from "react";

const SuccessAlert = ({ onCloseAlert, ...props }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed z-30 bg-[#00000098] backdrop-blur-sm">
      <div className="w-[70%] h-[40%] rounded-[20px] text-[#083F46] bg-[#fff] flex flex-col justify-center items-center">
        <h1 className="w-full text-center text-[20px]">{props.message}</h1>
        <button
          className="w-[80px] h-[40px] text-[#fff] rounded-[20px] bg-[#083F46] mt-[50px]"
          onClick={() => onCloseAlert()}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default SuccessAlert;

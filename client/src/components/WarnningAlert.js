import React from "react";

const WarnningAlert = ({ onDelete, onCloseAlert, ...props }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed z-30 bg-[#00000098] backdrop-blur-sm">
      <div className="w-[900px] h-[40%] rounded-[20px] text-[#083F46] bg-[#fff] flex flex-col justify-center items-center">
        <h1 className="w-full text-center text-[20px]">
          Do you want to delete the contact "{props.contactName}" ?
        </h1>
        <div className="w-[20%] flex justify-between items-center">
          <button
            className="w-[80px] h-[40px] text-[#fff] rounded-[20px] bg-[#083F46] mt-[50px]"
            onClick={() => onDelete(props.userId)}
          >
            Yes
          </button>

          <button
            className="w-[80px] h-[40px] text-[#083F46] rounded-[20px] border-[2px] border-solid border-[#083F46] mt-[50px]"
            onClick={() => onCloseAlert()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarnningAlert;

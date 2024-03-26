import React from "react";
import Login from "../admin/Login";
import Register from "../admin/Register";

const Home = () => {
  return (
    <div 
      className="
        home w-screen h-screen bg-[url('/src/Images/bg.jpg')] bg-contain
        overflow-hidden

        after:content-['']
        after:w-screen after:h-screen after:bg-[#ffffffbe]
        after:absolute
        after:z-10
        after:top-0
      "
    >
      <div 
        className="
          w-[50%] h-full bg-[#083F46] relative z-20 flex justify-center items-center

          after:content-['']
          after:w-[50%] after:h-[110%] after:bg-[#083F46]
          after:absolute
          after:z-10
          after:top-[-5%]
          after:left-[70%]
          after:rounded-[50%]
        ">
          <Login/>
      </div>
 
      <div className="
          w-[50%] h-full bg-[#000] relative z-20 flex justify-center items-center">
            fddfh
      </div> 
    </div>
  );
};

export default Home;

import React from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const handleClick = () => {
    toast.success("Info Sended");
  };
  return (
    <div id="footer" className="my-[60px] max-w-[1200px] mx-auto px-[15px]">
      <h1 className="relative text-[36px] w-[100px] mx-auto font-semibold text-center mt-[50px] mb-3 before:absolute before:left-0 before:bottom-0 before:w-[100px] before:h-[2px] before:bg-[black] before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
        Footer
      </h1>
      <div className="flex justify-between gap-6 flex-wrap">
        <div>
          <p className="text-[22px] font-semibold">Home</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <p className="text-[22px] font-semibold">Users</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <p className="text-[22px] font-semibold">Carts</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <p className="text-[22px] font-semibold">Footer</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div id="contact">
          <p className="text-[22px] font-semibold mb-1">Contact Us</p>
          <form action="" className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="h-[35px] px-[10px] border border-gray-400 rounded-[5px] outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="h-[35px] px-[10px] border border-gray-400 rounded-[5px] outline-none"
            />
            <button
              onClick={handleClick}
              className=" bg-green-600 text-white py-1.5 px-4 rounded-[8px] mt-2 hover:bg-green-700 duration-300 cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);

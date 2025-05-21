import React from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div
      id="home"
      className="max-w-[1200px] px-[15px] h-[100px] mx-auto flex justify-between items-center "
    >
      <img src="./logo.jpg" alt="myLogo" className="h-[45px]" />
      <ul className="flex items-center gap-x-6 text-[18px] max-sm:hidden">
        <a
          href="#home"
          className="relative font-semibold hover:text-green-600 before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-green-600  hover:before:w-[100%] cursor-pointer before:duration-300"
        >
          <li>Home</li>
        </a>
        <a
          href="#users"
          className="relative font-semibold hover:text-green-600 before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-green-600  hover:before:w-[100%] cursor-pointer before:duration-300"
        >
          <li>Users</li>
        </a>
        <a
          href="#products"
          className="relative font-semibold hover:text-green-600 before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-green-600  hover:before:w-[100%] cursor-pointer before:duration-300"
        >
          <li>Products</li>
        </a>
        <a
          href="#footer"
          className="relative font-semibold hover:text-green-600 before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-green-600  hover:before:w-[100%] cursor-pointer before:duration-300"
        >
          <li>Footer</li>
        </a>
      </ul>
      <button className="max-sm:hidden bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white w-[140px] h-[40px] rounded-tl-[40px] rounded-br-[40px] mt-2 hover:from-green-600 hover:to-green-800 duration-300 cursor-pointer">
        <a href="#contact">Contact</a>
      </button>

      <IoMdMenu className="hidden text-[30px] cursor-pointer hover:text-green-600 duration-300 max-sm:block" />
    </div>
  );
};

export default React.memo(Header);

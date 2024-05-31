import React from "react";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="p-2 bg-black w-full flex justify-between  h-[5rem]">
        <div className="flex ml-0 sm:ml-12 p-1.5 mix-blend-screen ">
          <img src="./logobg.png" alt="" className="h-auto w-36 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4 mr-4 sm:mr-4">
          <FaUser
            size={24}
            color="#DFB317"
            className="sm:block hidden cursor-pointer"
          />
          <FaShoppingCart
            size={24}
            color="#DFB317"
            className="sm:block hidden cursor-pointer"
          />
          <FaBars
            size={24}
            color="#DFB317"
            className="block sm:hidden cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Header;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalLine } from "react-icons/ri";

import UserContext from "../../context API/userContext"
import logoImg from "../../assets/logo.png"

const Navbar = () => {

  const userContext = useContext(UserContext)

  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenuDropdown = () => {
    setisMenuOpen(!isMenuOpen);
  };


  return (
    <nav id="navbar" className={` fixed top-0 w-full z-50  py-4 ${window.location.pathname === "/" ? " text-white  " : " text-black "} `}>

      <div className=" w-full mx-auto flex  justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={logoImg} alt="Logo image" className=" w-15 object-cover " />
        </Link>

        {/* navbar menus  */}
        <div className="md:flex space-x-6 font-semibold hidden">
          <Link to="/dashboard" className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Dashboard
          </Link>
          <Link to="/application" className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Apply
          </Link>
          <Link to="/login" className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Login
          </Link>
          {userContext.isLogin === 1 && <Link to="/" onClick={() => {
            userContext.setisLogin(0)// set is login 0 that he is logged out 
            window.localStorage.clear()// clear the localstorage
          }} className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Log Out
          </Link>}
        </div>

        {/* drop down menus */}
        <div className="relative md:hidden block">
          <button
            onClick={toggleMenuDropdown}
            className="  text-slate-200  px-2 py-2 text-3xl rounded-lg cursor-pointer transition-colors "
          >
            {/* <img src={userImg} alt="userImg" className="w-10 h-10 rounded-full object-cover" /> */}
            <RiBarChartHorizontalLine className={`${window.location.pathname==='/' ? " text-white ": " text-black "} text-4xl font-bold`} />
          </button>

          {isMenuOpen && (
            <div
              className="absolute mt-4 px-2 right-0 backdrop-blur-md bg-[#1d203983] border border-slate-700 rounded-lg shadow-lg"
            >
              <ul className="p-2">
                <li>
                  <Link to="/dashboard" className={`block py-2 my-2 px-3 ${window.location.pathname === "/dashboard" ? " dark:text-blue-500 text-blue-700 " : " text-white "} rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/application" className={`block py-2 my-2 px-3 ${window.location.pathname === "/application" ? " dark:text-blue-500 text-blue-700 " : " text-white "} rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}>
                    Apply
                  </Link>
                </li>
                <li>
                  <Link to="/login" className={`block py-2 my-2 px-3 ${window.location.pathname === "/login" ? " dark:text-blue-500 text-blue-700 " : " text-white "} rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}>
                    Login
                  </Link>
                </li>
                {userContext.isLogin === 1 && <li>
                  <Link to="/" onClick={() => {
                    userContext.setisLogin(0)// set is login 0 that he is logged out 
                    window.localStorage.clear()// clear the localstorage
                  }} className={`block py-2 my-2 px-3 ${window.location.pathname === "/editor" ? " dark:text-blue-500 text-blue-700 " : " text-white "} rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}>
                    Log Out
                  </Link>
                </li>}
              </ul>
            </div>
          )}
        </div>
      </div>



    </nav>
  );
};

export default Navbar;
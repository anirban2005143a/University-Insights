import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context API/userContext"
import logoImg from "../../assets/logo.png"
 
const Navbar = () => {

  const userContext = useContext(UserContext)

  return (
    <nav id="navbar" className={` fixed top-0 w-full z-50  py-4 ${window.location.pathname === "/" ? " text-white  " : " text-black "} `}>
      
      <div className=" w-full mx-auto flex sm:flex-row flex-col justify-between md:items-center px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={logoImg} alt="Logo image" className=" w-15 object-cover " />
        </Link>
        <div className="flex space-x-6 font-semibold">
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
      </div>
    </nav>
  );
};

export default Navbar;
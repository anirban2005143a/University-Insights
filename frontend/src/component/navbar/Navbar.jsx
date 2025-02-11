import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {


  return (
    <nav id="navbar" className={` fixed top-0 w-full z-50  py-4 ${window.location.pathname==="/" ? " text-white  ": " text-black "} `}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          University Insights
        </Link>
        <div className="flex space-x-6 font-semibold">
          <Link to="/dashboard" className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Dashboard
          </Link>
          <Link to="/signup" className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Register
          </Link>
          <Link to="/login" className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Login
          </Link>
          <Link to="/application" className=" hover:underline hover: underline-offset-4 text-text hover:text-primary transition duration-300">
            Apply
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
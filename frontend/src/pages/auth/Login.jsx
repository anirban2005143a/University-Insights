import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { FaSpinner } from "react-icons/fa6";


import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import UserContext from '../../context API/userContext';

const Login = () => {

  const navigate = useNavigate()// navigate componets
  const userContext = useContext(UserContext) // context api

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [isLoading, setisLoading] = useState()

  //function to show alert
  const showToast = (message, err) => {
    if (err) {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  ///function to login user
  const userLogin = async () => {
    try {
      setisLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/auth/login`, {
        email, password
      })
      console.log(res)
      res.data.message && showToast(res.data.message, 0)

      //set islogin true
      userContext.setisLogin(1)

      //store data in local storage
      window.localStorage.setItem("token", res.data.jwtToken)
      window.localStorage.setItem("id", res.data.userid)

      //navigate to home page after login
      navigate("/")

      navigate("/")
    } catch (error) {// handel errors
      console.log(error)

      //set islogin false
      userContext.setisLogin(0)

      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)
    } finally {
      setisLoading(false)
    }

  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className=' min-h-screen' style={{ backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      <Navbar />
      <ToastContainer />
      <div id='login' className=' py-[120px]'>
        <section >
          <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">

            <div className="w-full bg-[#ffffff] rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
                </h1>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  userLogin()
                }} className="space-y-4 md:space-y-6" >
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input value={email} onChange={(e) => {
                      setemail(e.target.value)
                    }} type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                    <input value={password} onChange={(e) => {
                      setpassword(e.target.value)
                    }} type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                  </div>

                  <button disabled={isLoading} type="submit" className=" flex justify-center cursor-pointer w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600">
                    {isLoading ? <FaSpinner className=" animate-spin" /> : "Sign In"}
                  </button>
                  <p className="text-sm font-light text-gray-800 ">
                    Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline text-blue-500">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Login
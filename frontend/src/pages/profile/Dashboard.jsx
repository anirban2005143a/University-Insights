import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { FaSpinner } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify"

import ProfileHeader from "./ProfileHeader";
import ApplicationList from "./ApplicationList";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import UserContext from "../../context API/userContext";
import PageLoader from "../../component/pageLoader/PageLoader";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const userContext = useContext(UserContext) // context api
  const navigate = useNavigate() // navigate components

  const [isLoading, setisLoading] = useState(false)//loading state
  const [user, setuser] = useState(null)// user details
  const [applications, setapplications] = useState(null) // all applications


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

  // function to fetch user details
  const fetchUserDetails = async () => {
    try {
      setisLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/auth/details`, {
        userid: localStorage.getItem("id")
      }, {
        headers: {
          "authToken": localStorage.getItem("token")
        }
      })

      console.log(res)

      setuser(res.data.user)
      setapplications(res.data.allApplications)

    } catch (error) {
      console.log(error)

      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)

    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    if (userContext.isLogin === 0) {
      navigate("/login")
    }
    if (userContext.isLogin === -1) {
      userContext.checkIsLogin()
    }
  }, [userContext.isLogin])

  useEffect(() => {
    userContext.isLogin === 1 && fetchUserDetails()
  }, [userContext.isLogin])


  return (
    <>
      <ToastContainer />
      <Navbar />
      {(userContext.isLogin !== 1 || isLoading) && <PageLoader />}

      {userContext.isLogin === 1 && <div style={{ backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>

        <div className="min-h-screen bg-background md:px-8 sm:px-5 px-3 py-[120px]">
          {/* Dashboard Header */}
          {user && <ProfileHeader user={user} />}

          {/* Applications List */}
          {applications && <ApplicationList applications={applications} />}
        </div>

        <Footer />
      </div>}
    </>
  );
};

export default Dashboard;
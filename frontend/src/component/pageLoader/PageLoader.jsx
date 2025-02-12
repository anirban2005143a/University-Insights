import React from 'react'
import { FaSpinner } from "react-icons/fa6";

const PageLoader = () => {
  return (
    <div id='pageLoading'
      className=' fixed w-screen h-screen top-0 left-0  flex justify-center text-4xl items-center z-40'
      style={{ "backgroundImage": "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" }}>
      <FaSpinner className=' animate-spin' />
    </div>
  )
}

export default PageLoader
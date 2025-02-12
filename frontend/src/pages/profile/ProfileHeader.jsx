import React from 'react'
import userImg from "../../assets/user.png"

const ProfileHeader = (props) => {
    const { user } = props
    return (
        <div className="dashboard-header bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col justify-center items-center">
                <img
                    src={userImg}
                    alt="User"
                    className="w-20 h-20 rounded-full border-2 border-primary"
                />
                <div className=' text-center'>
                    <h1 className="text-2xl font-bold text-primary">{user.userName}</h1>
                    <p className="text-text text-blue-600 ">{user.email}</p>
                    <p className="text-text">{user.about} </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
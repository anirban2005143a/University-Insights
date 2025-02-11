import React from 'react'
import userImg from "../../assets/user.jpeg"

const ProfileHeader = (props) => {
    const { user } = props
    return (
        <div className="dashboard-header bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center space-x-6">
                <img
                    src={userImg}
                    alt="User"
                    className="w-20 h-20 rounded-full border-2 border-primary"
                />
                <div>
                    <h1 className="text-2xl font-bold text-primary">{user.name}</h1>
                    <p className="text-text">{user.email}</p>
                    <p className="text-text">{user.location}</p>
                    <p className="text-text mt-2">{user.about}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
import React from 'react'

const ApplicationList = (props) => {

    const { applications } = props

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">Your Applications</h2>
            {applications.map((app) => (
                <div
                    key={app.id}
                    className="application-card bg-[#ffffff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl text-primary underline underline-offset-4"><strong>{app.program}</strong></h3>
                            <p className="text-text "> <strong>Applicant name</strong> : {app.name}</p>
                            <p className="text-text "> <strong>Applicant email</strong> : {app.email}</p>
                            <p className="text-text"> <strong>Message</strong>  : {app.message}</p>
                            <p className="text-sm text-text  mt-2">
                                <span className="font-bold">Date Applied:</span> {app.dateApplied}
                            </p>
                        </div>
                        <div>
                            <span
                                className={`px-4 py-2 rounded-full text-sm font-semibold ${app.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : app.status === "Accepted"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                    }`}
                            >
                                {app.status}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ApplicationList
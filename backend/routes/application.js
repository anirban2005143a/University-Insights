const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const checkToken = require("../middleWire/checkToken")

//models
const User = require("../models/UserModel")
const Application = require("../models/applicationModel")

//router to submit applicatoion
router.post('/submit', checkToken, async (req, res) => {
    try {

        if (req.id !== req.body.userid) {
            return res.status(400).json({ message: `Please login first`, error: true })
        }

        // Validate required fields
        if (!req.body.name || !req.body.email || !req.body.program) {
            return res.status(400).json({ message: "Name, email, and program are required" });
        }

        // Create a new application
        const newApplication = new Application({
            name: req.body.name,
            email: req.body.email,
            program: req.body.program,
            message: req.body.message,
            status: Math.random() > 0.6 ? "Accepted" : Math.random() > 0.3 ? "Pending" : "Rejected"
        });
        newApplication.save()

        //update the user model
        const user = await User.findById(req.id)
        // const newUserApplicationArr = user.applications
        // newUserApplicationArr.push(newApplication._id)
        await user.updateOne({
            applications: [...user.applications ,newApplication._id ]
        })
        console.log(user)

        res.status(200).json({
            message: "Application submitted successfully",
            application: newApplication,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
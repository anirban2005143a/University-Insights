const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const checkToken = require("../middleWire/checkToken")

const JWTserect = process.env.JWT_MESSAGE;

//models
const User = require("../models/UserModel")

//signup 
router.post(
    "/create",
    async (req, res) => {
        console.log(req.body)
        try {
            //check user with same email present or not
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: true, message: "Email already exist." });
            }

            //make password hashing and salt
            const salt = await bcrypt.genSalt(10);
            const serectPassword = await bcrypt.hash(req.body.password, salt);
            //creat new user
            user = new User({
                userName: req.body.userName,
                password: serectPassword,
                email: req.body.email,
                about: req.body.about,
            });
            user.save();
            console.log(user)
            //creat json webtoken for sequrity
            let data = {
                id: user._id,
            };
            const jwtToken = jwt.sign(data, JWTserect);
            return res.status(200).json({ error: false, message: "User created successfully", jwtToken, userid: user._id });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: true, message: error.message });
        }
    }
);

//login
router.post(
    "/login",
    async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });//get user if exist
            if (!user) {//if user does not exist
                return res.status(400).json({ error: true, message: "Login with valid credentials" });
            }
            const check = await bcrypt.compare(req.body.password, user.password);//check password correct or not
            if (!check) {
                return res.status(400).json({ error: true, message: "Incorrect Password" });
            }
            await User.findOneAndUpdate({ email: req.body.email }, { lastLogin: Date.now() })
            let data = {
                id: user.id,
            };
            const jwtToken = jwt.sign(data, JWTserect);
            return res.status(200).json({ jwtToken, userid: user._id, error: false, message: "User login Successfully" });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "some internal error occured", error: true });
        }
    }
);

//check token validity
router.post("/checkToken", checkToken, async (req, res) => {
    try {
        if (req.id === req.body.id) {
            return res.status(200).json({ message: `Welcome ${req.body.userName}`, error: false })
        }
        return res.status(400).json({ message: `Please login first`, error: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message, error: true })

    }
})

module.exports = router;

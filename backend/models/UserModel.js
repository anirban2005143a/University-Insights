const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, " name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    about: {
      type: String,
      trim: true,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    applications: {
      type: [mongoose.Schema.Types.ObjectId], // Array of application IDs
      ref: "Application", // Reference to the Application model
      default: [], // Default is an empty array
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);

module.exports = User;
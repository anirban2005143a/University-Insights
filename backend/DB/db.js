const mongoose = require("mongoose");
require('dotenv').config();
console.log(process.env.PORT);
const connectDB = async () => {
  console.log(process.env.DATABSE_URL);
  try { 
    const connect = await mongoose.connect(process.env.DATABSE_URL);
    console.log(`Connection Successful: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB

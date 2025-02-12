const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const connectDB = require("./DB/db")

app.use(cors());
app.use(express.json());

//import routes
const Auth = require("./routes/auth")
const Application = require("./routes/application")

app.use('/api/auth', Auth);
app.use('/api/application', Application);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`⚙️ Server is running at port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error(`MongoDB connection error: ${err}`);
    });

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const connectDB = require("./DB/db")

app.use(cors());
app.use(express.json());

const Auth = require("./routes/auth")

app.use('/api/auth', Auth);


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

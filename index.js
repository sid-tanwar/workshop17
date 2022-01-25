const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");


dotenv.config();

mongoose.connect(process.env.MONGO_URI, () => console.log("DATABASE IS CONNECTED"));


const port = process.env.PORT;


app.use(bodyParser.json());
app.use("/", postRoute);



app.listen(port, () => console.log(`THE SERVER IS UP AND RUNNING ON PORT ${port}`));

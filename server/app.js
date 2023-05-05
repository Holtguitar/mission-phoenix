require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//middleware
// upload.any //use later for multi-image uploads. Make sure to change in app.post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); //if using .fetch and not using axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Database 
const uri = process.env.MongoDBConnection;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected!");
}).catch((error) => {
    console.log(error);
});

//Routes
const UsersRoute = require("./routes/users");
const GearRoute = require("./routes/Gear");

app.use("/users", UsersRoute);
app.use("/gear", GearRoute);

//Start Server
app.listen(3000, () => {
    console.log("Listening at port 3000");
});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//DB config
const db = require("./config/keys").mongoURI;
//database connection
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("database is connected...");
})
.catch((err)=>{
    console.log(err);
})

//routes const
const items = require("./routes/api/items");

//Use routes
app.use("/api/items",items);


//server connection 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`server is running at port ${PORT}`));
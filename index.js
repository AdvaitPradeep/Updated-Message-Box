const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});


app.listen(3000, function(){
    console.log("Server running at port 3000");
});
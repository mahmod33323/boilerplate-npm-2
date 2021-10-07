var express = require("express");
var app = express();

console.log("Hello World");
const aph=__dirname+"/views/index.html"
const apu=__dirname+"/public"
app.get("/", (req, res) => res.sendFile(aph));
app.use("/public",express.static(apu))

module.exports = app;

var express = require("express");
var app = express();

console.log("Hello World");
const aph=__dirname+"/views/index.html"
const apc=__dirname+"/public/style.css"
app.get("/", (req, res) => res.sendFile(aph));
app.use(express.static(apc))

module.exports = app;

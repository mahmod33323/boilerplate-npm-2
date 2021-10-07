var express = require("express");
var app = express();

console.log("Hello World");
const ap=__dirname+"/views/index.html"
app.get("/", (req, res) => res.sendFile(ap));

module.exports = app;

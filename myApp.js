var express = require("express");
var app = express();

console.log("Hello World");
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE == "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "Hello json" });
});
app.use(function(req, res, next) {
  console.log(ip);
  next();
}) 
module.exports = app;

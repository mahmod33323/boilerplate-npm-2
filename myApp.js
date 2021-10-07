var express = require("express");
var app = express();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
console.log("Hello World");
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE == "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "Hello json" });
});
app.get(
  "/now",
  (req, res, n) => {
    req.time = new Date().toString();
    n();
  },
  (req, res) => res.json({ time: req.time })
);
module.exports = app;

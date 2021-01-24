const express = require("express");
const app = express();
const colors = require("colors");
const path = require("path");
const fs = require("fs");

//static
app.use(express.static("viewsCSS"));
app.use(express.static("imng"));

//setings
app.set("port", 3000);

//middlewares

//routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

//listen to server
app.listen(app.get("port"), () => {
    console.log("server on port".rainbow ,app.get("port"));
});
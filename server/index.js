if (process.env.NODE_ENV !== "production") {
    require("dotenv").load();
}
var cors = require("cors");
const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();
var winston = require("winston");
var fs = require("fs");
require("winston-daily-rotate-file");

app.use(bodyParser.urlencoded({ extended: true }));

var transportsConsole = new winston.transports.Console();

var logger = winston.createLogger({
    transports: [transportsConsole]
});

//logger api
app.post("/api/logger", function(req, res, next) {
    logger.log(
        req.body.level.toLowerCase() || "error",
        "Client: " + req.body.message
    );
    return res.send("OK");
});

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

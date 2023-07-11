const express = require("express");
const app = express();

// folders import
const noAuth = require("./noAuth");

app.use("/public", noAuth);

module.exports = app;

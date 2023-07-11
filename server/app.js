const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const cors = require("cors");
const { ValidationError } = require("express-validation");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routers/index");

const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// for limiting cors
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, timeZone, x-token"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );
  next();
});

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

// for data bease connection
dbConnection();

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
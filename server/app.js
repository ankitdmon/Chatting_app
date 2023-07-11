const express = require('express');
require('dotenv').config();
const dbConnection = require('./config/db')
const app = express();
const routes = require('./routers/index')

const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

dbConnection();

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
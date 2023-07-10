const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

app.use("/", (req, res) => {
    res.json("Hello API!!");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
const express = require("express");
const router = express();
const signUp = require("../controllers/loginSignup.controller");

router.post("/register", signUp.register);

module.exports = router;

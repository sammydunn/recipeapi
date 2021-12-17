const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.post("/login", usersController.login);
router.post("/newuser", usersController.newUser, usersController.login);

module.exports = router;

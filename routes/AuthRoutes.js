const express = require("express");

const { Login, Me } = require("../controllers/AuthController");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

router.get("/me", verifyJWT, Me);
router.post("/login", Login);
//router.delete("/logout", logOut);

module.exports = router;

const express = require("express");

const verifyJWT = require("../middleware/verifyJWT");
const { verifyUser } = require("../middleware/AuthUser");
const { getProducts } = require("../controllers/ProductController");

const router = express.Router();

router.get("/products", verifyJWT, verifyUser, getProducts);

module.exports = router;

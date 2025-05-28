const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const kycController = require("../controllers/kycController");

router.get("/getUserKyc", kycController.getUserKyc);
router.post("/addUserKyc", kycController.addUserKyc);


module.exports = router; 
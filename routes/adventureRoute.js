const express = require("express");
const adventureController = require("./../controller/adventureController");
const router = express.Router();

router
  .route("/")
  .get(adventureController.getAllAdventures)
  .post(adventureController.createAdventure);

module.exports = router;

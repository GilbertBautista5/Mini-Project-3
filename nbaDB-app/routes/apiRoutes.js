let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.playersController.getPlayers(res)
});

router.get("/", (req, res) => {
    Controllers.teamController.getTeam(res)
  });

module.exports = router;
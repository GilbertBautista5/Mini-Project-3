let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.playerController.getPlayers(res)
});

router.post("/create", (req, res) => {
  Controllers.playerController.createPlayer(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.playerController.updatePlayer(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.playerController.deletePlayer(req, res);
});

module.exports = router;
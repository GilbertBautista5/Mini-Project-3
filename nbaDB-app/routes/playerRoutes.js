let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.getPlayers(res)
});

router.post("/create", (req, res) => {
  Controllers.userController.createPlayer(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updatePlayer(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.userController.deletePlayer(req, res);
});

module.exports = router;
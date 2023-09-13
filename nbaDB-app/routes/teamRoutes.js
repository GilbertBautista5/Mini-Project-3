let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.getTeams(res)
});

router.post("/create", (req, res) => {
  Controllers.userController.createTeam(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateTeam(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteTeam(req, res);
});

module.exports = router;
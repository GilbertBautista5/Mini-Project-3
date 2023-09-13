"use strict";

const models = require("../models");
const axios = require("axios");

const initialisePlayers = (res) => {
  axios
    .get("https://balldontlie.io/api/v1/players?per_page=100")
    .then((data) => {
      console.log(data.data.data);
      res.status(200).json({ data: data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

const initialiseTeams = (res) => {
  axios
    .get("https://balldontlie.io/api/v1/teams?per_page=45")
    .then((data) => data.data.data)
    .then((teams) => models.Team.insertMany(teams))
    .then(function(){console.log("Data inserted")})
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  initialisePlayers,
  initialiseTeams,
};

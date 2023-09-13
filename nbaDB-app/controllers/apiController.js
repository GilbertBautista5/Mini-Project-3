"use strict";

const { response } = require("express");
const models = require("../models");
const axios = require("axios");

const initialisePlayers = async () => {
  for (let i = 1; i < 53; i++) {
    try {
      let response = await axios.get(
        `https://balldontlie.io/api/v1/players?page=${i}&per_page=100`
      );
      let players = response.data.data;
      for (const player of players) {
        const existingPlayer = await models.Player.findOne({ id: player.id });
        if (existingPlayer) {
          console.log("player already exist in DB");
        } else {
            await models.Player.create(player)
            console.log("player inserted")
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  //   for (let i = 1; i < 53; i++) {
  //     axios
  //       .get(`https://balldontlie.io/api/v1/players?page=${i}&per_page=100`)
  //       .then((data) => data.data.data)
  //       .then((players) => models.Player.insertMany(players))
  //       .then(function () {
  //         console.log("Player inserted");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
};

const initialiseTeams =async () => {
    try {
        let response = await axios.get(
            "https://balldontlie.io/api/v1/teams?per_page=45"
        );
    let teams = response.data.data
    for (const team of teams) {
        const existingTeam = await models.Team.findOne({ id: team.id });
    if (existingTeam) {
        console.log("Team already exist in DB")
    } else {
        await models.Team.create(team)
        console.log("Team inserted")
    }}
} catch (error) {
    console.log(error);
  }

};


//   axios
//     .get("https://balldontlie.io/api/v1/teams?per_page=45")
//     .then((data) => data.data.data)
//     .then((teams) => models.Team.insertMany(teams))
//     .then(function () {
//       console.log("Team inserted");
//     })
//     .catch((err) => {
//       console.log(err);
//     });

module.exports = {
  initialisePlayers,
  initialiseTeams,
};

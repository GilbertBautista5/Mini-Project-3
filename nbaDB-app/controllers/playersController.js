"use strict";
let Models = require("../models"); //matches index.js

const getPlayers = (res) => {
  
  Models.Player.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createPlayer = (data, res) => {
  
  console.log(data);
  new Models.Player(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePlayer = (req, res) => {
  
  console.log(req.body)
  Models.Player.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false })
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  };

  const deletePlayer = (req, res) => {
  
  Models.Player.findByIdAndRemove(req.params.id, req.body, {
  useFindAndModify: false })
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  }

module.exports = {
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
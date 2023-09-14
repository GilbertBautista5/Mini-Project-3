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

const getOnePlayer = (req, res) => {
 
  Models.Player.findOne({id:req.params.id})
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
  Models.Player.updateOne({id: req.params.id}, req.body )
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  };

  const deletePlayer = (req, res) => {
  
  Models.Player.deleteOne({id:req.params.id})
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  }

module.exports = {
  getPlayers,
  getOnePlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
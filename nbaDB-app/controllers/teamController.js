"use strict";
let Models = require("../models"); 

const getTeams = (res) => {
 
  Models.Team.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getOneTeam = (req, res) => {
 
  Models.Team.findOne({id:req.params.id})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createTeam = (data, res) => {
 
  console.log(data);
  new Models.Team(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateTeam = (req, res) => {
 
  console.log(req.body)
  Models.Team.updateOne({id: req.params.id}, req.body )
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  };

  const deleteTeam = (req, res) => {
 
    Models.Team.deleteOne({id:req.params.id})
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  }

module.exports = {
  getTeams,
  getOneTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};
"use strict";
const axios = require('axios')
import player from '../models/player';

const getPlayers = (res) => {
    axios.get('https://balldontlie.io/api/v1/players?per_page=100').then(data => {
        console.log(data.data);
        res.status(200).json({data: data.data })
}).catch(err => {
    res.status(500).json({data: err.data})
})

};

const getTeams = (res) => {
    axios.get('https://balldontlie.io/api/v1/teams?per_page=45').then(data => {
        console.log(data.data);
        res.status(200).json({data: data.data })
}).catch(err => {
    res.status(500).json({data: err.data})
})

};

module.exports = {
    getPlayers,
    getTeams
}
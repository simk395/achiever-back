const ownedGames = require('../utils/ownedGames')
const express = require('express')
const router = new express.Router()


// GET all owned games for given Steam ID
router.get('/games', (req,res) => {
    ownedGames((error, json) => {
        res.send(json)
    })
})

// GET all played games for given Steam ID
router.get('/games/played', (req, res) => {
    ownedGames((error, json) => {
        const games = json.games.filter(game => game.playtime_forever !== 0)
        res.send({
            game_count: games.length,
            game: games
        })
    })
})

module.exports = router
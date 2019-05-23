const ownedGames = require('../utils/ownedGames')
const express = require('express')
const router = new express.Router()


// GET all owned games for given Steam ID
router.get('/games/:steamid', (req,res) => {
    const steamid = req.params.steamid
    ownedGames(steamid, (error, json) => {
        if(error || !json){
            return res.status(400).send()
        }
        res.send(json)
    })
})

// GET all played games for given Steam ID
router.get('/games/played/:steamid', (req, res) => {
    const steamid = req.params.steamid
    ownedGames(steamid, (error, json) => {
        if(error || !json){
            return res.status(400).send()
        }
        const games = json.games.filter(game => game.playtime_forever !== 0)
        res.send({
            game_count: games.length,
            game: games
        })
    })
})

module.exports = router
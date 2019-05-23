const achievements = require('../utils/achievements')
const express = require('express')
const router = new express.Router()

// GET achievement for a given app ID and steam ID
router.get('/achievements/:appid/:steamid', (req, res) => {
    const appid = req.params.appid
    const steamid = req.params.steamid
        achievements(appid, steamid, (error, json) => {
            if (error || !json || json.error){
                return res.status(400).send()
            } 
            res.send(json)
        })
})

module.exports = router
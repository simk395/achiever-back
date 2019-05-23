const express = require('express')
const profiles = require('../utils/profiles')
const router = new express.Router()

router.get('/profiles/:steamid', (req, res) => {
    const steamid = req.params.steamid
    profiles(steamid, (error, json) => {
        if( error ) {
            return res.status(400).send()
        }
        res.send(json)
    })
})

module.exports = router
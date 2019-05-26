const schema = require('../utils/gameSchema')
const express = require('express')
const router = new express.Router()

// GET achievement for a given app ID and steam ID
router.get('/schema/:appid', (req, res) => {
    const appid = req.params.appid
        schema(appid, (error, json) => {
            if (error || !json || json.error){
                return res.status(400).send()
            } 
            res.send(json)
        })
})

module.exports = router
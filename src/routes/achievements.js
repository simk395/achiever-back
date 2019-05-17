const achievements = require('../utils/achievements')
const express = require('express')
const router = new express.Router()

router.get('/achievements', (req, res) => {
    achievements((error, json) => {
        res.send(json)
    })
})

module.exports = router
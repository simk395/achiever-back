const express = require('express')
const achievements = require('./utils/achievements')
const gamesRouter = require('./routes/games')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(gamesRouter)

app.get('/achievements', (req, res) => {
    achievements((error, json) => {
        res.send(json)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

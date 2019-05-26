const express = require('express')
const gamesRouter = require('./routes/games')
const achievementsRouter = require('./routes/achievements')
const profilesRouter = require('./routes/profiles')
const gameSchemaRouter = require('./routes/gameSchema')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

// Routes
app.use(express.json())
app.use(cors())
app.use(gamesRouter)
app.use(achievementsRouter)
app.use(profilesRouter)
app.use(gameSchemaRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

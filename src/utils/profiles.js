const request = require('request')

const profiles = (steamid, callback) => {
    const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=0CCB520BCD3CD0D5FC954821C426FAFA&steamids=${steamid}`
    request( {url, json: true }, (error, { body }) => {
        if (error) {
            return callback("Unable to retrieve data!", undefined)
        } else if (body.response.players.length <= 0) {
            return callback("User does not exist!", undefined)
        }
        callback(undefined, body.response.players[0])
    })

}

module.exports = profiles
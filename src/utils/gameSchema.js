const request = require('request')

// Gives all achievements for a given steam app ID

const gameSchema = (appid, callback) =>{
    const url = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2?key=0CCB520BCD3CD0D5FC954821C426FAFA&appid=${appid}`
    request({url, json: true}, (error, { body }) => {
        if(error){
            return callback('Unable to retrieve data!', undefined)
        } else if ( !body.game.availableGameStats ){
            return callback(undefined, {achievements: []})
        }
        callback(undefined, {achievements: body.game.availableGameStats.achievements})
    })
}

module.exports = gameSchema
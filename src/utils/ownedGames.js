const request = require('request')

// Uses Steam Web API to GET owned games for a given Steam ID

const ownedGames = (steamid, callback) => {
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=0CCB520BCD3CD0D5FC954821C426FAFA&steamid=${steamid}&include_appinfo=1&include_played_free_games=1`
    request( {url, json: true}, (error, { body }) => {
        if ( error ) {
            callback('Unable to receive data!', undefined)
        }
        callback(undefined, body.response)
    })
}

module.exports = ownedGames
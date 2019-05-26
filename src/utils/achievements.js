const request = require('request')

// Gives all achievements for a given steam app ID

const achievements = (appid, steamid, callback, language = 'english') =>{
    const url = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1?key=0CCB520BCD3CD0D5FC954821C426FAFA&steamid=${steamid}&appid=${appid}&l=${language}`
    request({url, json: true}, (error, { body }) => {
        if(error){
            return callback('Unable to retrieve data!', undefined)
        } else if ( body.playerstats.error ) {
            return callback(undefined, {player_achievements: {achievements: []}})
        }
        callback(undefined, {player_achievements: body.playerstats})
    })
}

module.exports = achievements
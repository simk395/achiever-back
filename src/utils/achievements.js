const request = require('request')

const achievements = (callback) =>{
    const url = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1?key=0CCB520BCD3CD0D5FC954821C426FAFA&steamid=76561198005590866&appid=440'
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to retrieve data!', undefined)
        }
        callback(undefined, body.playerstats)
    })
}

module.exports = achievements
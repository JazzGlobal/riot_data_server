var request = require('request'),
     api_key = '?api_key=RGAPI-b4af90a9-1bdf-47f4-954f-75a14482d0fd'

const api = {
    
    // Returns Summoner Account using a specified Account ID.     
    GetSummonerByAccountId(accountId, callback){
        request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}${api_key}`, (err, res, body) => {
            if(err){
                console.log(err)
                callback({"error": "Could not find Summoner."})
            } else {
                var bodyData = JSON.parse(body)
                callback(bodyData)
            }
        })
    },
    // Returns Summoner Account using a specified Summoner Name.     
    GetSummonerByName(summonerName, callback){
        request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}${api_key}`, (err, res, body) => {
            if(err) {
                console.log(err)
                callback({"error": "Could not find Summoner"})
            } else {
                var bodyData = JSON.parse(body)
                callback(bodyData)
            }
        })
    },
    GetMatchList(accountId, callback) {
        request(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}${api_key}`, (err, res, body) => {
            if(err) {
                console.log(err)
                callback({"error": "Could not find Matches"})
            } else {
                var bodyData = JSON.parse(body)
                callback(bodyData)
            }
        })
    }, 
    GetMatchByGameId(matchId, callback) {
        request(`https://na1.api.riotgames.com/lol/match/v4/matches/${matchId}${api_key}`, (err, res, body) => {
            if(err) {
                console.log(err)
                callback({"error": "Could not find Match"})
            } else {
                var bodyData = JSON.parse(body)
                callback(bodyData)
            }
        })
    }
}
module.exports = api
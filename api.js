var request = require('request'),
     api_key = '?api_key=RGAPI-f2e9b8dd-dc37-4e78-9813-38a9afa7214a'

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
    // Returns Match List by Account ID.
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
    // Returns Game Information By Match ID
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
    },
    // Returns Champion Mastery points for given summoner.
    GetChampionMasteries(summonerId, callback) {
        request(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}${api_key}`, (err, res, body) => {
            if(err) {
                console.log(err)
                callback({"error": "Could not find Champion Masteries"})
            } else {
                var bodyData = JSON.parse(body)
                callback(bodyData)
            }
        })
    }
}
module.exports = api
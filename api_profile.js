var request = require('request'),
    Auth = require('./api_credentials')

const Profile = {
    
    // Returns Summoner Account using a specified Account ID.     
    GetSummonerByAccountId(accountId, callback){
        request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}${Auth.API_KEY}`, (err, res, body) => {
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
        request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}${Auth.API_KEY}`, (err, res, body) => {
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
        request(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}${Auth.API_KEY}`, (err, res, body) => {
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
        request(`https://na1.api.riotgames.com/lol/match/v4/matches/${matchId}${Auth.API_KEY}`, (err, res, body) => {
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
        request(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}${Auth.API_KEY}`, (err, res, body) => {
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
module.exports = Profile
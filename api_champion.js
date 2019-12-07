var request = require('request'),
    Auth = require('./api_credentials'),
    data_dragon_champ = 'http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json'

Champion = {
    GetAllChampions(callback) {
        request(data_dragon_champ, (err, response, body) => {
            if(err) {
                console.log(err)
                callback({"Error": "Could not access the Champion Data Dragon."})
            } else {
                var champData = JSON.parse(body)
                callback(champData['data'])
            }
        })
    }, 
    GetChampionById(championId, callback) {
        module.exports.GetAllChampions( (champData) => {
            var foundChampion = ''
            for (var i = 0; i < Object.keys(champData).length; i++) {
                var key = Object.keys(champData)[i]
                champion = champData[key]
                console.log(`Checking ${champion.key}`)
                if(champion.key == championId){
                    console.log(champion) 
                    foundChampion = champion
                    i = Object.keys(champData).length - 1
                }
            }
            if (foundChampion == '') {
                callback({"Error": "Could not find the specified champion."})
            } else {
                callback(champion)
            }
        })
    }
}

module.exports = Champion

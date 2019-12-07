
var express = require('express'),
    test_id = 'RF-7GQaooWZPFs-QFXpgAXkxO3X7EC0fKo6tnvG7Gr3Y8VQ',
    Profile = require('./api_profile'),
    app = express()


// Returns Summoner Account using a specified Account ID.     
app.get('/summoner/account/id/:id', (req, res) => {
    Profile.GetSummonerByAccountId(req.params.id, (summonerData) => {
        res.send(summonerData)
    })
})

// Returns Summoner Account using a specified Summoner Name.     
app.get('/summoner/account/name/:name', (req, res) => {
    Profile.GetSummonerByName(req.params.name, (summonerData) => {
        res.send(summonerData)
    })
})

// Returns Match List by Account ID.
app.get('/matches/account/:accountId', (req, res) => {
    Profile.GetMatchList(req.params.accountId, (matchData) => {
        res.send(matchData)
    })
})

// Returns Game Information By Match ID
app.get('/matches/match/:matchId', (req, res) => {
    Profile.GetMatchByGameId(req.params.matchId, (matchData) => {
        res.send(matchData)
    })
})

// Returns Champion Mastery points for given summoner.
app.get('/summoner/championmastery/:summonerId', (req, res) => {
    Profile.GetChampionMasteries(req.params.summonerId, (masteryData) => {
        res.send(masteryData)
    })
})

app.listen(3001, ()=> {
    console.log('listening on 3001 ...')
})
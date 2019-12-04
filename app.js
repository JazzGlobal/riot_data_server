
var express = require('express'),
    test_id = 'RF-7GQaooWZPFs-QFXpgAXkxO3X7EC0fKo6tnvG7Gr3Y8VQ',
    api = require('./api'),
    app = express()


// Returns Summoner Account using a specified Account ID.     
app.get('/summoner/account/id/:id', (req, res) => {
    api.GetSummonerByAccountId(req.params.id, (summonerData) => {
        res.send(summonerData)
    })
})

// Returns Summoner Account using a specified Summoner Name.     
app.get('/summoner/account/name/:name', (req, res) => {
    api.GetSummonerByName(req.params.name, (summonerData) => {
        res.send(summonerData)
    })
})


app.listen(3001, ()=> {
    console.log('listening on 3001 ...')
})
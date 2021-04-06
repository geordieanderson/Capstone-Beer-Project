const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function readBeers () {
    const beerData = fs.readFileSync('./data/favourites.json');
    const parsedData = JSON.parse(beerData);
    return parsedData;
}

router.get("/", (req, res) =>{
    const beers = readBeers();
    res.status(200).json(beers);
});

router.post("/", (req, res) =>{
    const userNotes = {
        id: uuidv4(),
        beerName: req.body.beerName,
        brewery: req.body.brewery,
    };

    console.log('is this posting?')
    const post = readBeers();
    post.push(userNotes);
    fs.writeFileSync("./data/favourites.json", JSON.stringify(post));
    res.json(userNotes);
});

module.exports = router;
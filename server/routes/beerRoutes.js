const express = require('express');
const router = express.Router();
const fs = require('fs');
// const { v4: uuidv4 } = require('uuid'); //IMPLEMENT WITH POST

function readBeers () {
    const beerData = fs.readFileSync('./data/master.json');
    const parsedData = JSON.parse(beerData);
    return parsedData;
}

router.get("/", (req, res) =>{
    const beers = readBeers();
    res.status(200).json(beers);
});

router.get("/:id", (req, res) =>{
    const idData = readBeers();
    const singleId = idData.find((id) => id.id === req.params.id);
    res.json(singleId);
});

module.exports = router;
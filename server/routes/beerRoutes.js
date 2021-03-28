const express = require('express');
const router = express.Router();
const fs = require('fs');

const readBeers = () => {
    const styleData = fs.readFileSync('./data/beers.json');
    const parsedData = JSON.parse(styleData);
    return parsedData;
}

router.get('/', (req, res) =>{
    const beers = readBeers();
    res.status(200).json(beers);
});

router.get('/:id'), (req, res) =>{
    const idData = readBeers();
    const singleId = idData.find((id) => id.id === req.params.id);
    res.json(singleId);
}

module.exports = router;
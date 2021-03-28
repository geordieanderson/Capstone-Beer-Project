const express = require('express');
const router = express.Router();
const fs = require('fs');

const readBreweries = () => {
    const styleData = fs.readFileSync('./data/breweries.json');
    const parsedData = JSON.parse(styleData);
    return parsedData;
}

router.get('/', (req, res) =>{
    const breweries = readBreweries();
    res.status(200).json(breweries);
});

module.exports = router;
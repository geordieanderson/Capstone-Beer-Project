const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function readBeers () {
    const beerData = fs.readFileSync('./data/notes.json');
    const parsedData = JSON.parse(beerData);
    return parsedData;
}


router.post("/", (req, res) =>{
    const userNotes = {
        id: uuidv4(),
        tastingNotes: req.body.tastingNotes,
    };

    console.log('is this posting?')
    const post = readBeers();
    post.push(userNotes);
    fs.writeFileSync("./data/notes.json", JSON.stringify(post));
    res.json(userNotes);
});

module.exports = router;
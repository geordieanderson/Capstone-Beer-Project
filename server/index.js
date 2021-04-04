const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8080;
const beerRoutes = require('./routes/beerRoutes');
const faveRoutes = require('./routes/faveRoutes');

app.use(cors());
app.use(express.json());


app.use((req, res, next) =>{
    console.log('middleware running');
    next();
})


app.use((req, res, next) => {
    if (req.method === "POST" && req.headers["content-type"] !== "application/json") {
        return res.status(400).send("Requires JSON");
    }
    next();
});

app.use('/beers', beerRoutes);
app.use('/favourites', faveRoutes);

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});
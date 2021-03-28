const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

require('dotenv').config();
const port = process.env.PORT || 8080;

const breweryRoutes = require('./routes/breweryRoutes');
const beerRoutes = require('./routes/beerRoutes');

app.use('/breweries', breweryRoutes);
app.use('/beers', beerRoutes);

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8080;
const beerRoutes = require('./routes/beerRoutes');

app.use(cors());
app.use(express.json());


app.use((req, res, next) =>{
    console.log('middleware running');
    next();
})

app.use('/beers', beerRoutes);

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});
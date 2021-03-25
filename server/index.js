const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

require('dotenv').config();
const port = process.env.PORT || 8080;

const styleRoutes = require('./routes/styleRoutes');

app.use('/styles', styleRoutes);

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});
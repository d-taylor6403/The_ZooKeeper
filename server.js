const fs = require('fs');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("tiny"));


//adding middleware to parse incoming or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});
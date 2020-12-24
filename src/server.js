const express = require('express');
const app = express();
let mongoose = require('mongoose');
require("dotenv/config");
mongoose.connect(process.env.DB_Connection);
let Person = require('../Model/Person');
app.use(express.json);
app.listen(5000,(err) => {
    if (err) {
        throw err;}
     else console.log('error')
})
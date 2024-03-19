const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use(require('./routes/hospital'));

mongoose.connect(process.env.DB_URL).
then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err)
});

app.listen(process.env.PORT, () => {
    console.log('server is running');
})

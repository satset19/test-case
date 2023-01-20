require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors");
const port = 4001
const route = require('./routes');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use('/', route)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
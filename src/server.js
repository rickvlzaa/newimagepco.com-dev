const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>New Image Painting Company</h1>').status(200)
})

app.listen(8080)
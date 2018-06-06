const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const routes = require('./routes/index')
const app = express()

app.use(morgan('dev'))

app.use('/app', routes)

app.listen(8080)
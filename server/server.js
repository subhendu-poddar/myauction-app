const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')
const path = require('path')
const morgan = require('morgan')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080;
const mongoURI = "mongodb+srv://sp:sp1999@cluster0.r77ai.mongodb.net/AUCTION?retryWrites=true&w=majority";

mongoose.connect(mongoURI/*  || process.env.DATABASE_ACCESS || 'mongodb://localhost/auction' */, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(morgan('tiny'))

//Data Parsing
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/', routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, ()=> console.log(`server is up and running at ${PORT}`))
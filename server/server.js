require('dotenv').config()
const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const { Logger } = require('./middleware/Logger');

//App initialization
const app = express()
app.use(Logger)
app.use(cors({origin: process.env.CLIENT_URI, credentials: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//Routes
const searchRoute = require('./routes/Search')

app.use('/search', searchRoute)

app.use((req, res, next) => {
    if (req.method == 'GET') {
        res.header('Cache-control', `public, max-age=300`)
    } else {
        // for the other requests set strict no caching parameters
        res.header('Cache-control', `no-store`)
    }

    res.header('X-Content-Type-Options', 'nosniff')
    res.header('Content-Type', 'application/json')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

//Server Start
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URI)
    .then(() => {
        const port = process.env.PORT || 3001
        app.listen(port, () => {
            console.log(`Connected to Database and Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.log(error)
})

//Root
app.get('/', async (req, res) => {
    res.json({ status: "Running" });
})




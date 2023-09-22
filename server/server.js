require('dotenv').config()
const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')


//App initialization
const app = express()
app.use(cors({origin: 'http://127.0.0.1:5173', credentials: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//Routes
const searchRoute = require('./routes/Search')

app.use('/search', searchRoute)

app.use((req, res, next) => {
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




const express = require('express');
const router = require('./src/Routers/api');



const app = new express();
const bodyParser = require('body-parser');


// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');


// database 
const mongoose = require('mongoose');


// security middleware implementation
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(hpp());
app.use(helmet());

// Rate limit middleware
const limiter = rateLimit({ windows: 16 * 60 * 100, max: 3000 });

// database connection

let url = "mongodb+srv://<userName>:<password>@cluster0.rxisjfd.mongodb.net/SalesProducts";
mongoose.connect(url).then(() => console.log("database connected")).catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.json({
        success: "API is Working and Home Route"
    })
})


// Managing Backend API routes
app.use('/api/sales', router)

app.use('*', (req, res) => {
    res.status(404).json({ status: "Fail", data: "Route/Page not found" });
})

module.exports = app;
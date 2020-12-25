const express = require('express');
require('dotenv').config({ path: './src/.env' });
const morgan = require('morgan'); // Logger, Automatically logs all requests
const helmet = require('helmet'); // Hides some headers that might give away vulnerable information
const cors = require('cors'); // Adds cross origin resource sharing header
const mongoose = require('mongoose');

const middlewares = require('./middlewares'); // Gets the middlewares from middlewares.js
const logs = require('./api/logs');
const app = express();
console.log(process.env.CORS_ORIGIN)
mongoose.connect('mongodb+srv://himanshu_biradar:QR181%5E%25%5EZTc@cluster0.r0ltp.mongodb.net/Travel-Logs-DB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connection established");
});
app.use(morgan('common')); // Sample log in terminal ::1 - - [20/Nov/2020:03:52:20 +0000] "GET / HTTP/1.1" 404 139
app.use(helmet());
app.use(cors({
    origin: "http://localhost:3000"//process.env.CORS_ORIGIN, // Only requests coming from this location can reach our backend
}));
app.use(express.json()); // Body Parsing Middleware
const port = process.env.PORT || 5000;

app.use('/', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.listen(port, () => {
    console.log(`Listening at http: //localhost:${port}`)
});
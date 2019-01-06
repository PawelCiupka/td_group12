'use strict'

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const logger = require("morgan");

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./api/routes');
app.use('/api', routes);


const dbUser = "root";
const dbPassword = "admin1234";
const dbRoute = "mongodb://"+dbUser+":"+dbPassword+"@ds125342.mlab.com:25342/td_group12";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("Connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// // All remaining requests return the React app, so it can handle routing.
// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

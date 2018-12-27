// const express = require('express');
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const path = require('path');
// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;

// const isDev = process.env.NODE_ENV !== 'production';
// const PORT = process.env.PORT || 5000;

// // Multi-process to utilize all CPU cores.
// if (!isDev && cluster.isMaster) {
//   console.error(`Node cluster master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
//   });

// } else {
//   const app = express();

//   // Priority serve any static files.
//   app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

//   // Answer API requests.
//   app.get('/api', function (req, res) {
//     res.set('Content-Type', 'application/json');
//     res.send('{"message":"Hello from the custom server!"}');
//   });

//   // All remaining requests return the React app, so it can handle routing.
//   app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
//   });

//   app.listen(PORT, function () {
//     console.error(`Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`);
//   });


//   const router = express.Router();

//   // this is our MongoDB database
//   //const dbRoute = "mongodb://admin1234:admin4321@ds125342.mlab.com:25342/td_group12";
//   const dbRoute = 'mongodb://admin:admin1234@ds137404.mlab.com:37404/dbtest';
//   // connects our back end code with the database
//   mongoose.connect(
//     dbRoute,
//     { useNewUrlParser: true }
//   );

//   let db = mongoose.connection;

//   db.once("open", () => console.log("connected to the database"));

//   // checks if connection with the database is successful
//   db.on("error", console.error.bind(console, "MongoDB connection error:"));


//   // this is our get method
//   // this method fetches all available data in our database
//   router.get("/getData", (req, res) => {
//     Data.find((err, data) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true, data: data });
//     });
//   });

//   // this is our update method
//   // this method overwrites existing data in our database
//   router.post("/updateData", (req, res) => {
//     const { id, update } = req.body;
//     Data.findOneAndUpdate(id, update, err => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   });

//   // this is our delete method
//   // this method removes existing data in our database
//   router.delete("/deleteData", (req, res) => {
//     const { id } = req.body;
//     Data.findOneAndDelete(id, err => {
//       if (err) return res.send(err);
//       return res.json({ success: true });
//     });
//   });

//   // this is our create methid
//   // this method adds new data in our database
//   router.post("/putData", (req, res) => {
//     let data = new Data();

//     const { id, message } = req.body;

//     if ((!id && id !== 0) || !message) {
//       return res.json({
//         success: false,
//         error: "INVALID INPUTS"
//       });
//     }
//     data.message = message;
//     data.id = id;
//     data.save(err => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   });

//   // append /api for our http requests
//   app.use("/api", router);

// }

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./api/model/data");

const API_PORT = 5000;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
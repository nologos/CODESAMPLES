console.log("attempting to start backend")


const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/',require("./routes/record"));
// get driver connection

const dbo = require("./routes/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${port}`);
});


app.use('/cors', require('cors')());

// This response will **NOT** have CORS headers, because the path '/nocors'
// doesn't start with '/cors'
app.get('/nocors', (req, res) => {
  res.send(process.env.MONGO_host);
});

// This response will have CORS headers
app.get('/cors', (req, res) => {
  res.send('ok');
});

// This response will also have CORS headers, because '/cors/test' starts
// with '/cors'
app.get('/cors/test', (req, res) => {
  res.send('ok');
});

// display hello world on root
app.get("/", (req, res) => {
  res.send("ok");
}
);

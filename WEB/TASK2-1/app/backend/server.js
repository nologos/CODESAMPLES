console.log("attempting to start backend");

const fetch = require("node-fetch");
const express = require("express");
const app = express();
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/", require("./routes/record"));
app.use("/", require("./routes/cache"));

// rate limit api calls to below routes to 100 per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// get driver connection
const dbo = require("./routes/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

app.use("/cors", require("cors")());

// This response will **NOT** have CORS headers, because the path '/nocors'
// doesn't start with '/cors'
app.get("/nocors", (req, res) => {
  res.send(process.env.MONGO_host);
});

// This response will have CORS headers
app.get("/cors", (req, res) => {
  res.send("ok");
});

// This response will also have CORS headers, because '/cors/test' starts
// with '/cors'
app.get("/cors/test", (req, res) => {
  res.send("ok");
});

// display hello world on root
app.get("/", (req, res) => {
  res.send("ok");
});

app.route("/cache2").get(function (req, res) {
  console.log("cache");
  console.log(jsondata);
  res.json([jsondata]);
  // res.json([{"test":"true"}]);
});

var btconly = {
  name: "btconly",
  link: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
  data: {},
};
var coinUSDGBP = { name: "coinUSDGBP", link: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd,gbp", data: {} };
var allcoin = { name: "allcoin", link: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false", data: {} };
var obj = [btconly, coinUSDGBP, allcoin];

function getf(obj, varname) {
  obj.map((item) => {
    if (item.name == varname.name) {
      if (item.time == null || Date.now() - item.time > 60000) {
        console.log("API updating " + item.name);
        fetch(varname.link)
          .then((response) => response.json())
          .catch((error) => console.log(error))
          .then((data) => {
            item.data = data;
            item.time = Date.now();
          });
      }
    }
  });
}

// save obj to a local temp file
var fs = require("fs");
function saveobj() {
  fs.writeFile("temp.json", JSON.stringify(obj), function (err) {
    if (err) {
      // console log full path
      console.log(__dirname + "/temp.json");
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

// saveobj();
// loadobj();

// assign obj from local temp file
function loadobj() {
  fs.readFile("temp.json", "utf8", function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
  });
}



obj.map((item) => getf(obj, item));

app.route("/btconly").get(function (req, res) {
  getf(obj, btconly);
  res.json(btconly.data);
});

app.route("/coinUSDGBP").get(function (req, res) {
  getf(obj, coinUSDGBP);
  res.json(coinUSDGBP.data);
});

app.route("/allcoin").get(function (req, res) {
  getf(obj, allcoin);
  res.json(allcoin.data);
});

app.route("/apiobj").get(function (req, res) {
  getf(obj, allcoin);
  res.json(obj);
});

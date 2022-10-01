const express = require("express");
const recordRoutes = express.Router();
const dbo = require("./conn.js");


// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 console.log("record")
 console.log(req.params)
  let db_connect = dbo.getDb("frontpage-passport");
 db_connect
   .collection("users")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// get result based on API filter 
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("frontpage-passport");
  console.log(ObjectId(req.params.id));
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("users")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) console.log("error");
      res.json(result);
    });
});

// get results based on name filter
recordRoutes.route("/record/search?name=:name").get(function (req, res) {
  console.log("search");
  // console.log("searching for " + req.params.name);
  // let db_connect = dbo.getDb("frontpage-passport");
  // let myquery = { name: req.params.name };

  // db_connect
  //   .collection("users")
  //   .find(myquery)
  //   .toArray(function (err, result) {
  //     if (err) console.log("error");
  //     res.json(result);
  //   });
}
);

// filter records
recordRoutes.route("/record/filter?name=:name&email=:email&phone=:phone").get(function (req, res) {
  console.log(req.params.name);
  let db_connect = dbo.getDb("frontpage-passport");
  let myquery = { name: req.params.name, email: req.params.email, phone: req.params.phone };

  db_connect
    .collection("users")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) console.log("error");
      res.json(result);
    });
}
);

  



module.exports = recordRoutes;
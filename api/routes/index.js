var express = require('express');
var router = express.Router();
var connection = require("../db");

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/api", function(req, res) {
  const sql = "SELECT * FROM passwords";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

router.post("/api", function(req) {
  const users = req.body;
  console.dir(users);
  // const sql =
  //   "INSERT INTO passwords (userName, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = (?);";
  // connection.query(sql, values, function(err, result) {
  //   if (err) throw err;
  //   res.send("Number of records inserted: " + result.affectedRows);
  // });
  });


module.exports = router;

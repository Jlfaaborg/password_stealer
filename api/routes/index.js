var express = require("express");
var router = express.Router();
var connection = require("../db");

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

/* For Fetch */
router.get("/api", function(req, res) {
  const sql = "SELECT * FROM passwords";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

/* For Add & Delete */
router.post("/api", function(req, res) {
  let count = 0;
  const users = req.body; // [{userName, passWord}]
  const type = req.query.type;
  console.log(type);
  let sql;
  switch (type) {
    case "add":
      sql =
        "INSERT INTO passwords (userName, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = (?);";
      for (var user of users) {
        let values = [user.userName, user.password, user.password];
        connection.query(sql, values, function(err, result) {
          if (err) throw err;
          count += result.affectedRows;
        });
      }
      res.send("Number of records inserted: " + count);
      break;
    case "delete":
      sql = "DELETE FROM passwords WHERE userName = (?) AND password = (?);";
      for (var auser of users) {
        let values = [auser.userName, auser.password];
        connection.query(sql, values, function(err, result) {
          if (err) throw err;
          count += result.affectedRows;
        });
      }
      res.send("Number of records inserted: " + count);
      break;
  }
});

module.exports = router;

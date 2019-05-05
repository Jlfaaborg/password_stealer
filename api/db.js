var mysql = require("mysql");

//local mysql db connection
var db = {
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b4a2d595e8780a",
  password: "426f165c",
  database: "heroku_038c1163e21ec19"
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db);

  connection.connect(function(err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on("error", function(err) {
    console.log("db error", err);
    // eslint-disable-next-line no-constant-condition
    if (err.code === "PROTOCOL_CONNECTION_LOST" || "ERR_CONNECTION_REFUSED") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();
module.exports = connection;
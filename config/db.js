const mysql = require("mysql");
const config = require("./index")

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : config.SERVER_HOST,
  user     : config.DATABASE_USER,
  password : config.DATABASE_PWD,
  database : config.DATABASE_NAME,
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
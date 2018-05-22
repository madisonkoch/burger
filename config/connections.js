var mysql = require("mysql");

var connection;

//Connection declaration (including JawsDB)
if(process.env.JAWSDB_URL){
  //Heroku Deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //LocalHost
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "#Rowgophs8",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
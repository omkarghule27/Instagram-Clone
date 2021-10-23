const mysql = require("mysql");
const { HOST, USER, PASSWORD, DB_NAME } = require("../config/secrets");

//database connection
let connection; 

function handleDisconnect() {
  connection = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB_NAME,
  });
  
  // connection.connect();
    
  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect(); 
    } else {
      throw err;
    }
  });
}
handleDisconnect();


module.exports = connection;

// const mysql=require("mysql");
// const {HOST, USER, PASSWORD, DB_NAME} = require('../config/secrets.js');


// var connection = mysql.createConnection({
//   host     : HOST,
//   user     : USER,
//   password : PASSWORD,
//   database : DB_NAME
// });
 
// connection.connect();
// module.exports = connection; 
// console.log('**DB CONNECTED**');
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
// connection.query('DESC user_table', function (error, data) {
   
//    console.log('The solution is: ', data);
//  });
// connection.end();
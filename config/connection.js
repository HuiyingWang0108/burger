var mysql = require('mysql');
// var PORT=process.env.PORT||3306;

var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b3dafee0e8fa6d',
    port: 3306,
    password: '72602ec9',
    database: 'heroku_2dbde5aa5eda53f'
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting*******: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
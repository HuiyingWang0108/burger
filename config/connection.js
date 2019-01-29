var mysql = require('mysql');
// var PORT=process.env.PORT||3306;

var connection = mysql.createConnection({
    // host: 'us-cdbr-iron-east-03.cleardb.net',
    // user: 'b3dafee0e8fa6d',
    // port: 3306,
    // password: '72602ec9',
    // database: 'heroku_2dbde5aa5eda53f'
    host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'i0m8qkmmv0o9s03a',
    port: 3306,
    password: 'ajsmg85jng1tbev8',
    database: 'kfb95jamaiq6qbc5'
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting*******: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
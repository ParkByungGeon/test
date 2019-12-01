var express    = require('express');
var mysql      = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
    host     : 'db-mysql.cj5nhbnzm5ke.ap-northeast-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'adminroot',
    port     :3306,
    database : 'stockdb'
})
connection.connect();

router.post('/',function(req,res,next){
    console.log(req.body.date)
    connection.query(`SELECT * from c000020 WHERE date>${req.body.date}`,function(err,result){
        console.log(result);

        res.send(result);
    })
})

router.get('/',function(req,res,next){
    console.log(req.body.date)
    connection.query(`SELECT * from c000020 WHERE date>20191120`,function(err,result){
        console.log(result);

        res.send(result);
    })
})
  module.exports = router;

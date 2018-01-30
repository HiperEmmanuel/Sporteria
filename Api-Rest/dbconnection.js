var mysql=require('mysql');
var connection=mysql.createPool({

host:'fim.redirectme.net',
user:'lopezloera',
password:'lopezcln02468',
database:'sporteria'

});
module.exports=connection;
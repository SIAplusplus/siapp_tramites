var mysql = require('mysql');

var conexion=mysql.createConnection({
    host:'host.docker.internal',
    //host:'localhost',
    user:'nlamprea',
    password:'123456',
    database:'siapp_tramites_db'
});



module.exports={conexion};
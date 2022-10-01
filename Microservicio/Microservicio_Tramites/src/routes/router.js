var mysql = require('mysql');

var conexion=mysql.createConnection({
    host:'host.docker.internal',
    user:'nlamprea',
    password:'123456',
    database:'backenda'
});



module.exports={conexion};
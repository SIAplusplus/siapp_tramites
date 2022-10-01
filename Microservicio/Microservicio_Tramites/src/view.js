var express = require('express');
var mysql = require('mysql');

var {conexion}=require('./routes/router')
var app = express();

//usar json en postman
app.use(express.json());

var Cserver=conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion correcta');
    }
});

//process.env.PUERTO || 
/*const puerto = 3000;

app.listen(puerto, function(){
    console.log('Conexion server: '+ puerto);
});*/

module.exports={Cserver};
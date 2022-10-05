var express = require('express');
var mysql = require('mysql');

// metodos de express
var app = express();

//usar json en postman
app.use(express.json());

var {conexion}=require('../Server/server')

var {Cserver}=require('../Routes/view')

var {port}=require('../controller/puerto')

app.get('/', function(req, res){
    res.send('INICIO');
});


//Mostar todo en la BD
app.get('/api/tramites', (req,res)=>{
    conexion.query('SELECT * FROM `sia++_tramites_db`', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

//Mostar una cosa de la BD
app.get('/api/tramites/:id', (req,res)=>{
    conexion.query('SELECT * FROM `sia++_tramites_db` WHERE id = ?',[req.params.id], (error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
            //para un campoo espacifico
            //res.send(fila[0].motive);
        }
    })
});

app.post('/api/tramites',(req,res)=>{
    let data = {student_id:req.body.student_id, motive:req.body.motive, request_text:req.body.request_text};
    // ? = data
    let sql = 'INSERT INTO `sia++_tramites_db` SET ?';
    conexion.query(sql, data, function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});

//EDITAR 
app.put('/api/tramites/:id',(req,res)=>{
    let id = req.params.id;
    let student_id = req.body.student_id;
    let motive = req.body.motive; 
    let request_text= req.body.request_text;
    let sql= 'UPDATE `sia++_tramites_db` SET student_id = ?, motive = ?, request_text = ? WHERE id = ?';

    conexion.query(sql, [student_id, motive, request_text, id], function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});

//ELIMINAR
app.delete('/api/tramites/:id',(req,res)=>{
    conexion.query('DELETE FROM `sia++_tramites_db` WHERE id = ?',[req.params.id],function(error, filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});
//process.env.PUERTO || 
const puerto = 3000;

app.listen(port, function(){
    console.log('Conexion server: '+ port);
});
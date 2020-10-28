const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let jugador = {
    nombre:'',
    apellido: '',
    score:''
   };

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};
/////////////////GET//////////////

app.get('/', function (req, res) {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio'
       };
    res.send(respuesta);
});

app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});
/////////////////POST//////////////

app.post('/gamer', function (req, res) 
{
    respuesta={
        error: false,
        codigo:200,
        mensaje:''
    };
    
    if(jugador.nombre === '' || jugador.apellido === ''  || jugador.score === '')
    {
        respuesta={
            error: true,
            codigo:502,
            mensaje:' Camps obligatoris camp nom, cognom o score'
        };
    } 
    else if(jugador.nombre !== '' || jugador.apellido !== '' || jugador.score !== '')
    {
     
        respuesta={
            error: true,
            codigo:503,
            mensaje:'El jugador ya fue creado previamente'
        };

    }
   else
    {
        
        jugador={
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            score:req.body.score    
        };
        respuesta={
            error: true,
            codigo:200,
            mensaje:'Jugador Creado',
            respuesta: jugador
        };
                             
   }
    res.send( respuesta ); 
});

app.listen(3000, () =>
{
 console.log("El servidor está inicializado en el puerto 3000");
});

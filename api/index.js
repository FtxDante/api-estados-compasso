const express = require('express');
const app = express();
const config = require('config');
const roteador = require('./routes/estados/verbosEstados');

app.use(express.json());

app.use('/api/estados', roteador);

app.listen(config.get('api.porta'), () =>{
    console.log("Servidor iniciado")
})
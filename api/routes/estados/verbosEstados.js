const roteador = require('express').Router();
const MetodosEstados = require('./MetodosEstados'); 
const Estados = require('./Estados')

roteador.post('/', async (req, res) =>{
    const dados = req.body;
    console.log(req.body)
    const estados = new Estados(dados);
    await estados.criar();
    res.send(JSON.stringify(estados))
    
})

roteador.get('/', async (req, res) =>{
    const resultados = await MetodosEstados.listar();
    res.status(200).send(
        JSON.stringify(resultados)
    )
})

roteador.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const estados = new Estados({id: id});
        await estados.procurarPorId();
        res.send(
            JSON.stringify(estados)
        )
    }catch(erro){
        res.send(
            JSON.stringify({mensagem: erro.message})
        )
    }
})



module.exports = roteador;
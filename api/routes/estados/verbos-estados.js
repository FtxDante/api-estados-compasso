const roteador = require('express').Router();
const MetodosEstados = require('./metodos-estados'); 
const Estados = require('./Estados')

roteador.post('/', async (req, res) =>{
    try{
        const dados = req.body;
        const estados = new Estados(dados);
        await estados.criar();
        res.status(201).send(JSON.stringify(estados))
    }catch(erro){
        res.status(404).send(JSON.stringify(erro.message))
    }
    
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
        await estados.carregar();
        res.status(200).send(
            JSON.stringify(estados)
        )
    }catch(erro){
        res.status(404).send(
            JSON.stringify({mensagem: erro.message})
        )
    }
})

roteador.put('/:id',async (req,res) =>{
    try{
        const id = req.params.id;
        const dados = req.body;
        const estados = new Estados({...dados,id: id});
        const dadosAtualizados = await estados.atualizar();
        res.status(200).send(JSON.stringify({"Dados Atualizados": dadosAtualizados}));
    }catch(erro){
        res.status(404).send(
            JSON.stringify({mensagem: erro.message})
        )
    }
})

roteador.delete('/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const estados = new Estados({id: id});
        await estados.carregar();
        await estados.remover();
        res.end()
    }catch(erro){
        res.send(JSON.stringify({mensagem: erro.message}))
    }
})

module.exports = roteador;
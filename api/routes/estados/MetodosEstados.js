const ModeloTabelaEstados = require('./ModeloTabelaEstados');

module.exports = {
    listar(){
        return ModeloTabelaEstados.findAll();
    },
    inserir(estado){
        return ModeloTabelaEstados.create(estado);
    },
    async procurar(id){
        const encontrado = await ModeloTabelaEstados.findOne({
                where:{
                    id: id
                } 
        })

        if(!encontrado){
            throw new Error('Fornecedor não encontrado')
        }

        return encontrado;

    }
}
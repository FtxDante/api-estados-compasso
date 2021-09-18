const ModeloTabelaEstados = require('./modelo-tabela-estados');

module.exports = {
    async listar(){
        const resultado = await ModeloTabelaEstados.findAll({raw: true});
        if(Array.isArray(resultado) && resultado.length > 1){
            console.log('1', resultado)
            return resultado
        }else{
            console.log('2', resultado)
            return resultado[0]
        }
    },
    inserir(estado){
        return ModeloTabelaEstados.create(estado);
    
    },
    //Foi tratado, se não achar o item por id ele lança um erro.
    async procurarPorId(id){
        const encontrado = await ModeloTabelaEstados.findOne({where:{id: id}})
        // Se não achar por ID, ele retorna NULL que em Boolean Significa FALSE.
        if(!encontrado){
            throw new Error('Fornecedor não encontrado')
        }
        return encontrado;
    },

    atualizar(id, dadosParaAtualizar){
        return ModeloTabelaEstados.update(dadosParaAtualizar,{where: {id: id}})
    },

    remover(id){
        ModeloTabelaEstados.destroy({where:{id: id}})
    }
}
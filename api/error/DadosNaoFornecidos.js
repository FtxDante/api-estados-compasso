class DadosNaoFornecidos extends Error{
    constructor(){
        super('Dados não fornecidos');
        this.name = 'DadosNaoFornecidos';
        this.idError = 0;
    }
    
}

module.exports = DadosNaoFornecidos;
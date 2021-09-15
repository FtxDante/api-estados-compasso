const MetodosEstados = require("./MetodosEstados");

class Estados{
    constructor({id, nome, regiao, populacao,capital, area}){
        this.id = id;
        this.nome = nome;
        this.regiao = regiao;
        this.populacao = populacao;
        this.capital = capital;
        this.area = area;
    }

    async lista(){
       return await MetodosEstados.listar();
    }

    async criar(){
        const resultado = await MetodosEstados.inserir({
            nome: this.nome,
            regiao: this.regiao,
            populacao: this.populacao,
            capital: this.capital,
            area: this.area
        })

        this.id = resultado.id;
    }

    async procurarPorId(){
        const resultado = await MetodosEstados.procurar(this.id);
        this.id = resultado.id
        this.nome = resultado.nome;
        this.regiao = resultado.regiao;
        this.populacao = resultado.populacao;
        this.capital = resultado.capital;
        this.area = resultado.area;
    }
}

module.exports = Estados;
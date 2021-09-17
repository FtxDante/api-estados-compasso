const MetodosEstados = require("./metodos-estados");
const DadosNaoFornecidos = require('../../error/DadosNaoFornecidos')

class Estados{
    constructor({id, nome, regiao, populacao,capital, area}){
        this.id = id;
        this.nome = nome;
        this.regiao = regiao;
        this.populacao = populacao;
        this.capital = capital;
        this.area = area;
    }
    //Não precisa tratar
    async lista(){
       return await MetodosEstados.listar();
    }
    //Foi tratado, se não inserido um valor necessário ele lança um erro.
    async criar(){
        this.validar();
        const resultado = await MetodosEstados.inserir({
            nome: this.nome,
            regiao: this.regiao,
            populacao: this.populacao,
            capital: this.capital,
            area: this.area
        })

        this.id = resultado.id;
    }
    //Não precisa ser tratado, o método procurarPorId já faz isso.
    async carregar(){
        const resultado = await MetodosEstados.procurarPorId(this.id);
        this.id = resultado.id
        this.nome = resultado.nome;
        this.regiao = resultado.regiao;
        this.populacao = resultado.populacao;
        this.capital = resultado.capital;
        this.area = resultado.area;
    }
    //Foi tratado, se não achar o item por id ele lança um erro.
    async atualizar(){
        await MetodosEstados.procurarPorId(this.id);
        const campos = ['nome', 'regiao','populacao','area', 'capital'];
        const dadosParaAtualizar = {};
         
        campos.forEach((campo)=>{
            const valor = this[campo];
            if((typeof valor == 'string' || typeof valor == 'number') && valor.length > 0){
                console.log(valor)
                dadosParaAtualizar[campo] = valor;
            }
        })

        if(Object.keys(dadosParaAtualizar).length == 0){
            throw new DadosNaoFornecidos()
        }
        
        MetodosEstados.atualizar(this.id, dadosParaAtualizar);

        return dadosParaAtualizar;
    }

    async remover(){
        return await MetodosEstados.remover(this.id)
    }

    validar(){
        const campos = ['nome', 'regiao','populacao','area', 'capital'];

        campos.forEach(campo =>{
            const valor = this[campo];
            // Lança um erro se não for uma string ou numero, se a quantidade de caracteres for 0, ou se o valor for 0;
            if((typeof valor != 'string' && typeof valor != 'number') || valor.length === 0 ||valor === 0){
                throw new Error(`Campo ${campo} inválido`)
            }
        })
    }
}

module.exports = Estados;
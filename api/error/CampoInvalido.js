class CampoInvalido{
    constructor(campo){
        const mensagem = `O campo [${campo}] é inválido` 
        super(mensagem)
        this.name = 'CampoInvalido';
        this.idErro = 1;
    }
}

module.exports = CampoInvalido;
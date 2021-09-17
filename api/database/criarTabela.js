const ModeloTabela = require('../routes/estados/modelo-tabela-estados');

ModeloTabela
    .sync()
    .then(() => {console.log('Tabela Criada com SUCESSO')})
    .catch(console.log)
const ModeloTabela = require('../routes/estados/ModeloTabelaEstados');

ModeloTabela
    .sync()
    .then(() => {console.log('Tabela Criada com SUCESSO')})
    .catch(console.log)
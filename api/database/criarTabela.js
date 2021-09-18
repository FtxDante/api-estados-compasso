// Escreva node e navegue até aqui no TERMINAL e dê ENTER, lembre-se de ter criado o banco de dados "bd-estados" (ou o nome que você configurou no default.json)
const ModeloTabela = require('../routes/estados/modelo-tabela-estados');

ModeloTabela
    .sync()
    .then(() => {console.log('Tabela Criada com SUCESSO')})
    .catch(console.log)
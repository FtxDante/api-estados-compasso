# API DE ESTADOS BRASILEIROS :world_map:
Avaliação de fim de Sprint da **Compasso-UOL** ​​ : criar uma API para armazenar estados. :confetti_ball:

### Configurando esta API :gear:

1. Na pasta config, entre no arquivo **default.json** 

   1. **Substitua no campo senha**, o valor referente a senha do **seu** banco de dados MySQL

   2. **Defina a porta do localhost**, o valor padrão é 3000, mas vai da sua escolha.

   3. **Outras configurações nesse arquivo são opcionais**

      ![image-20210918112023850](C:\Users\vinga\AppData\Roaming\Typora\typora-user-images\image-20210918112023850.png)

2. **Crie um banco de dados manualmente**, com o nome `bd-estados`, para isso vá até o WorkBench e digite  `` CREATE DATABASE `db-estados` ``
3. **Como criar a tabela de estados**: execute o arquivo `criarTabela.js`, ele irá criar a tabela conforme foi predefinido.
   1. O comando para isso é `node api/database/criarTabela`

#### :rotating_light: Importante! :rotating_light:

* **Banco de dados vazio: **Depois de terminar essas configurações o banco de dados já deve estar pronto para ser utilizado, mas iniciará **vazio** e você terá que criar estado por estado.
* **Dump de estados**: Você pode pular a parte 2 da configuração e usar um **dump** que está salvo aqui [dump-de-estados.dump](https://github.com/FtxDante/estados-com-populacao-e-area/blob/main/bd-estados_estados.sql).
* **Insert de estado**: Se já passou pela configuração e não quer ter que apagar nada, você pode inserir os dados na tabela com o arquivo de texto com os comandos de [insert-into.txt](https://github.com/FtxDante/estados-com-populacao-e-area/blob/main/insert-estados.txt)

* **Sobre os dados inseridos:** Os dados de área e população correspondem ao o ano de 2000 e já estão desatualizados, você pode corrigir se quiser!

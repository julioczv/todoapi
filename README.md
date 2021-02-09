# API para lista de tarefa
Essa api utiliza NodeJS + Sequelize + Sqlite para criar o CRUD (Create , Read , Update E Delete) outro tipo de aplicação para listagem de tarefas.

## Instalação do Express e Sequelize

```
$ npm init

$ npm install --save express

$ npm install --save sequelize

$ npm install -D sequelize-cli

$ npm install --save sqlite3

$ npx sequelize init 
```
Diretórios:

* **config**  - Configuração do banco de dados
* **migrations** - Mudanças estruturais no banco de dados 
* **models** - Referências com as tabelas do banco de dados
* **seeders** - Dados iniciais para o banco
  
  ## Criação de modelos e migrações 
  
  Comandos sequelize-cli:

  ```
  $ npx sequelize-cli model: generate --name=Tarefa --attributes name;string, desc:string,status:boolean,data:date, dataDeConclusao:date,prioridade:string

  ```


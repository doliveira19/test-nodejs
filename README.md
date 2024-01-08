# API de cadastro de produtos 

## Requisitos

- Node
- Redis

## Criar conteiner Redis

docker run --name redis -p 6379:6379 -d redis

## Como usar a API

1. Clonar repositório;
2. Instalar dependências: `$ npm install`;
3. Iniciar Redis (container);
4. Iniciar a aplicação: `$ npm run dev`;

## npm scripts

Scripts que podem ser executados com o comando `$ npm run "script-name"`:
* `dev`: Inicia a aplicação;
* `test`: Executa testes unitários;
* `build`: Realiza o build do projeto no diretório `./build`;
* `start`: Executa o projeto depois da build;

## Testes Unitários

Foi feito o teste apenas do service de createProduto para exemplo

## Documentação da api

http://localhost:3000/api-docs

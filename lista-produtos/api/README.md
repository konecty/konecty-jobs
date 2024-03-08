# Como rodar a API em homologação

## Requisitos mínimos:
- Node 18.18.0;

## Como executar a aplicação:
- Instale as dependências
  ```
  npm install
  ```

- Crie um arquivo `.env` na raiz do projeto, o conteudo desse arquivo deve 
seguir como exemplo o arquivo '.env.example'.

- Inicie a aplicação:
  ```
  npm run start:dev
  ```

- Use a aplicação:
  ```
  http://localhost:3333
  ```
- Para rodar os testes da aplicação:
```
  npm run test
  ```
# Como rodar a API em produção:

## Requisitos mínimos:
- Node 18.18.0;

## Como executar a aplicação:
- Instale as dependências
  ```
  npm i
  ```

- Crie o build da aplicação
  ```
  npm run build
  ```

- Inicie a aplicação
  ```
  npm run start
  ```
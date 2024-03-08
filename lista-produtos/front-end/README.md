# Como rodar

## Requisitos:
- Node 18.18.0;

## Como executar a aplicação:
- Instale as dependências
  ```
  npm install
  ```

- Crie um arquivo `.env.local` na raiz do projeto, o conteudo desse arquivo deve 
seguir como exemplo o arquivo `e.env.local.template`.

- Inicie a aplicação:
  - Se rodar dessa forma a porta padrão sera a `3000`, caso ela esteja em uso
    o next irá escolher outra automaticamente:
    ```
    npm run dev
    ```
  - Para usar uma rota específica use o comando da seguinte forma:
    ```
    npx next dev -p 4000
    ```
    ou

    ```
    PORT=4000 npx next dev
    ```

- Use a aplicação:
  ```
  http://localhost:3000
  ```

# Como rodar em produção:

## Requisitos:
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
  
- Inicie a aplicação:
  - Se rodar dessa forma a porta padrão sera a `3000`:
    ```
    npm run start
    ```
  - Para usar uma rota específica use o comando da seguinte forma:
    ```
    npx next start -p 4000
    ```
    ou
    
    ```
    PORT=4000 npx next start
    ```
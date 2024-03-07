### Desafio NextJS de pedrocorrea2002

<details>
<summary>Dependencias</summary>

- node v20.11.1
</details>

<details>
<summary>Como executar o servidor?</summary>

>A partir da pasta raiz, entre na pasta do servidor pelo terminal:
>```
>cd server
>```

>É importante executar antes o servidor, uma vez que a aplicação principal, depende dele para conseguir os dados dos produtos.

>Da primeira vez que for testar o projeto, será necessário executar o comando abaixo para gerar a node-modules que vai possuir todos os pacotes necessários para o servidor funcionar:
>```
>npm install
>```

>Uma vez terminado a execução do comando, certifique-se de que a sua porta local 5000 está disponível, se não, mude a porta na linha 4 do arquivo index.js para uma que esteja disponível

>Agora execute o comando abaixo para iniciar o servidor:
>```
>node index.js
>```

>Caso tudo estiver correto, você deve ver no seu terminal a mensagem "Servidor ligado"
</details>

<details>
<summary>Como executar a aplicação?</summary>

>A partir da pasta raiz, entre na pasta da aplicação pelo terminal:
>```
>cd client
>```

>Da primeira vez que for testar o projeto, será necessário executar o comando abaixo para gerar a node-modules que vai possuir todos os pacotes necessários para a aplicação funcionar:
>```
>npm install
>```

>Uma vez terminado a execução do comando, certifique-se de que a sua porta local 3000 está disponível

>Caso durante a configuração do servidor você tenha precisado mudar a porta onde o servidor estava executando, mude ela também na linha 21 do arquivo /src/app/page.tsx

>Agora execute o comando abaixo para iniciar a aplicação:
>```
>npm run dev
>```

>Caso tudo estiver correto, você poderá acessar o link "http://localhost:3000" no seu navegador e verá a página principal da aplicação, onde poderá filtrar os produtos que por categoria e nome

</details>
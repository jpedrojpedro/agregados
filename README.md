Agregados
---

### Descrição:

A aplicação destina-se ao gerenciamento de convidados em um dado evento. A ideia seria facilitar a adição e a categorização dos convidados, mas sem a burocracia de login/senha.

Baseado no conceito do Dontpad[1], basta digitar uma URL e a mesma inicia o gerenciamento dos contatos. Com o intuito de facilitar, foi criado um Bookmarklet[2], que deve ser utilizado com o usuário logado na página do Facebook.

O usuário navega até o perfil de um potencial candidato e, ao clicar no Bookmarklet, adiciona informações dele no evento correto no Agregados.

### Tecnologias:

- Vue.js[3]
- Node.js
- Firebase (persistência da informação e functions)
- Github Pages

### Step-by-Step:

1. Entrar no site [https://jpedrojpedro.github.io/agregados](https://jpedrojpedro.github.io/agregados/#/)

2. Inserir nome do evento e clicar em `Vai!`

3. Arrastar o link `Arrate para Bookmark` até o bookmark do seu navegador de preferência

4. Entre no perfil de algum amigo seu no Facebook

5. Clique no Bookmarklet criado

6. Verifique a criação na página do seu evento no Agregados

### Desafios e Próximos Passos:

Projeto realizado com tecnologias não exploradas, até então, pelo desenvolvedor. O aprendizado foi bem grande. Porém, devido à isso, muitas funcionalidades ainda podem ser realizadas.

Dentre elas, a ideia inicial de categorizar os convidados através de associação das tags.

### Execução:

- servidor local

```
npm run
```

- deploy Github Pages

```
yarn run build
git add .
git commit
git push
```

### Referências:

[1] Dontpad: [http://dontpad.com/](http://dontpad.com/)

[2] Bookmarklet: [https://mrcoles.com/bookmarklet/](https://mrcoles.com/bookmarklet/)

[3] Vue.js [https://vuejs.org/](https://vuejs.org/)
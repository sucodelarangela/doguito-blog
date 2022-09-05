<div id='top'>

# Doguito Blog | Práticas de React Router

</div>

_[Read it in English](#English)_

Aplicação desenvolvida ao longo do curso de **React Router** da [Alura](https://www.alura.com.br/).

O curso foca nos conceitos básicos do React Router, além de utilizar [Axios](https://axios-http.com/ptbr/docs/intro) e [json-server](https://www.npmjs.com/package/json-server) para consumo de API. Durante o andamento do curso, optei por usar as versões mais recentes do **React** e do **react-router-dom**, além de refatorar o CSS comum para **styled-components**, como prática adicional.

### Alterações em relação ao projeto original:

> Update do React v17.0.1 pela v18.2.0
>
> Update do React Router v5.2.0 pela v.6.3.0
>
> Refatoração do CSS padrão para styled-components
>
> Implicações: uso diferente de _BrowserRouter_, _Routes_ e _Route_; descontinuado o uso do hook _useRouteMatch_; substituição do hook _useHistory_ por _useNavigate_; remoção da importação do React onde desnecessário.

<!-- prettier-ignore -->
| 🪧 Vitrine.Dev |     |
| ------------- | --- |
| ✨ Nome        | **Doguito Blog** - Alura |
| 🏷️ Tecnologias | React, JavaScript, React Router, Styled Components, Axios, json-server |
| 🚀 URL         | Veja como rodar localmente em [**⚙️ Como usar**](#howto)                                                          |
| 🔥 Desafio     | [**Conteúdo do curso**](https://www.alura.com.br/curso-online-react-router-navegacao-spa) |

![](https://raw.githubusercontent.com/sucodelarangela/doguito-blog/02984846c735efdc9792730b9cde3c646f9a5bd1/public/og-image.png#vitrinedev)

## Detalhes do projeto

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <a href='https://reactrouter.com/' target='_blank'><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/></a>
  <a href='https://styled-components.com/' target='_blank'><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>
</div>

<div id='howto'>

### ⚙️ Como usar

</div>

Para experimentar a aplicação em sua totalidade, você pode roda-lo localmente. Para isso, siga as etapas a seguir:

1. Faça o download deste repositório através do botão verde **Code** no topo da página e, em seguida, clicando em **Download ZIP**. Ou, se preferir, através do terminal (Git Bash, Powershell, etc.), use o comando:

```
git clone https://github.com/sucodelarangela/doguito-blog.git
```

2. Acesse a pasta do projeto com seu terminal;

3. Rode o comando `npm install` para instalar as dependências;

4. Inicie o servidor localmente com o comando `npm run server`. Você deve receber a seguinte mensagem de confirmação:

```
> react-router@0.1.0 server
> json-server --watch db.json --port 5000


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:5000/categorias
  http://localhost:5000/posts

  Home
  http://localhost:5000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

5. Para iniciar a aplicação, rode o comando `npm start` no terminal. Você deve receber a seguinte mensagem de confirmação:

```
You can now view react-router in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.0.171:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

6. Para usar a aplicação, abra o seu browser preferido e acesse o endereço `http://localhost:3000/`

<a href='#top'>🔼 Voltar ao topo</a>

---

<div id="English">

_English version_

</div>

### 🔎 Overview

Application developed during the **React Router** course from [Alura](https://www.alura.com.br/).

This training courses focuses on React Router basic concepts and also makes use of [Axios](https://axios-http.com/ptbr/docs/intro) and [json-server](https://www.npmjs.com/package/json-server) for API fetching. During this course, I've chosen to use the most recent versions of **React** and **react-router-dom** and have also refactored the standard CSS styles to **styled-components** as additional practice.

### Changes made to the original project:

> Update from React v17.0.1 to v18.2.0
>
> Update from React Router v5.2.0 to v.6.3.0
>
> Refactoring of standard CSS to styled-components
>
> Implications: different use of _BrowserRouter_, _Routes_ e _Route_; discontinuation of _useRouteMatch_ hook; substitution of _useHistory_ hook for _useNavigate_ hook; deleting React imports where not necessary.

### ⚙️ How to use it

For full access to the app functionalities, you can run it locally on your machine. In order to do so, follow the steps below:

1. Download this repository by clicking the green **Code** button on top of the page and then clicking **Download ZIP** option. Or use the following command on your terminal (Git Bash, Powershell, etc.):

```
git clone https://github.com/sucodelarangela/doguito-blog.git
```

2. Access the project root folder on your terminal;

3. Run `npm install` to install all project dependencies;

4. Start the json-server locally with the command `npm run server`. You should receive the following message:

```
> react-router@0.1.0 server
> json-server --watch db.json --port 5000


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:5000/categorias
  http://localhost:5000/posts

  Home
  http://localhost:5000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

5. To start the application, run `npm start` on yout terminal. You should receive the following message:

```
You can now view react-router in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.0.171:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

5. To use the app, open your favorite browser and go to the URL `http://localhost:3000/`

<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by [@sucodelarangela](https://angelacaldas.vercel.app)

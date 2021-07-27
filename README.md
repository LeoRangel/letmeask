# Letmeask: Leandro Rangel 

[![Repositório](https://img.shields.io/badge/LeoRangel-letmeask-blueviolet)](https://github.com/LeoRangel/letmeask/)
[![licence mit](https://img.shields.io/github/license/LeoRangel/letmeask)](https://github.com/LeoRangel/letmeask/blob/main/LICENSE)

> :speech_balloon: Projeto de App web de gerenciamento de perguntas utilizando React e a plataforma Firebase
>
> (Desenvolvido durante a Next Level Week Together da Rocketseat)
>
> Para ver o projeto em execução acesse a [**DEMO**](https://letmeask-rho.vercel.app/)


## Versioning/Versionamento
Esse projeto não possui um sistema de versionamento.

## History/Histórico
Consulte as [Releases](https://github.com/LeoRangel/letmeask/releases) para acompanhar as alterações feitas no projeto.

## License/Licença do Projeto
[MIT License](https://github.com/LeoRangel/letmeask/blob/main/LICENSE)




## Mais informações

<details>
<summary>Iniciando o projeto</summary>
<br />

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />
</details>























## Algumas coisas vistas durante a NLW

<details>
<summary>Aula 01</summary>
<br />

### Aula 01

#### (Criar projeto React)
> O create react-app é uma biblioteca que ajuda a iniciar um projeto com React
```bash
yarn create react-app letmeask --template typescript
```

#### (Compilar aplicação e exibir no navegador)
```bash
yarn start
```

#### (Remover arquivos desnecessários da instalação)
> Na pasta "public" deixar só o "index.html" e na pasta "src" deixar só o "App.tsx"; "Index.tsx" e "react-app-env-d.ts"

#### (Arquivo "packaje.json")
> Armazena as dependências

#### (Pasta "nodemodules")
> Onde são armazenadas todas as dependências

#### (Arquivo "index.tsx")
> Primeiro arquivo javascript executado que importa o "react" e o "react-dom" (react para desenvolvimento web) e que coloca o código JSX dentro do "index.html"

#### (Arquivo "index.tsx" inicial)
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### (Arquivo "index.html")
> Único arquivo html que será aberto no site. Todo a aplicação vai ser aberta nesse arquivo usando javascript

#### (Arquivo "index.html" inicial)
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>LetmeAsk</title>
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
</html>
```

#### (Arquivo "App.tsx")
> Componente

#### (Arquivo "App.tsx" inicial)
```javascript
function App() {
  return (
    <h1>Hello World!</h1>
  );
}
export default App;
```

#### (Criar pasta "src/components")
> Para guardar os componentes

#### (Criar pasta "src/services")
> Para guardar arquivos de serviços externos

#### (Conceito SPA)
> Single Page Aplication

#### (JSX e TSX)
> Como são chamados os HTML usados dentro de Javascrip e Typescript, respectivamente

#### (Componentes)
> São pedaços de código separados escritos em forma de functions que retornam algum html. Os componentes sempre tem a primeira letra maiúscula, para não confundir com as tags html

#### (Propriedades)
> São informações (string, número, array, etc) que pode-se passar para um componente (tal qual os atributos do html). No Typescript é necessário declarar a tipagem das propriedades no arquivo do componente.
>
> Ex.: Declarando a tipagem
````javascript
type RoomCodeProps = {
  code: string;
}
````
> Ex.: Usando a tipagem nas propriedades da função
````javascript
export function RoomCode(props: RoomCodeProps) {
  ...
}
````
> Também pode-se utilizar a forma desestruturada, informando os dados da propriedade
````javascript
export function RoomCode({code}: RoomCodeProps) {
  ...
}
````

#### (Formas de tipagem no Typescript)
> Para o exemplo de um objeto que tem três propriedades em que a chave (key) é uma string e o valor é um número:
````javascript
const obj = {
  prop1 = 1,
  prop2 = 2,
  prop3 = 3,
}
````
> As formas para declarar a tipagem desse objeto são:
````javascript
type objType = Record<string, number>;
````
> ou
````javascript
type objType = {
  [key: string] : number;
}
````
> ou (se conhecer as chaves do objeto)
````javascript
type objType = {
  prop1 = number,
  prop2 = number,
  prop3 = number,
}
````

#### (Passando propriedade para o componente)
> Como é passada para um componente
````javascript
<Componente props="texto" />
````
> Como se declara a propriedade em um componente:
````javascript
// o "?" define que a propriedade é opcional
type ButtonProps = {
  text?: string;
}
````

#### (Propriedade children)
> Para pegar o valor usado entre as tags de abrir e fechar o componente usa-se a propriedade children. Ex.:
````javascript
<Componente>Valor entre as tags</Componente>
````
> Como se declara a propriedade children em um componente:
````javascript
type ComponenteProps = {
  children?: string;
}
````

#### (Ex.: Declarando um componente Button)
````javascript
// Declarando o tipo de propriedade
type ButtonProps = {
  text?: string;
}
export function Button(props: ButtonProps){
  return (
    <button>{ props.text || 'Default' }</button>
  )
}
````

###### (Dica: exportar componente)
> Se usar "export default", caso seja alterado o nome do componente a importação em outros arquivos continuará funcionando, por isso, é melhor usar apenas o "export function"


#### (Estado)
> Informação mantida por um componente, cujo valor pode ser mudado pelo usuário. Uma variável criada dentro de estado não sofre alterações, se pode setar um novo valor/informação baseado no que existia anteriormente (Conceito de imutabilidade).
>
> Uma informação mantida por um estado dura apenas enquanto o usuários está usando a aplicação (se usar o comando F5, por exemplo, essa informação é apagada). É necessário usar outros meios para recuperar a informação caso ele saia do app.

#### (Ex.: Declarando um estado)
> o useState retorna um valor e uma função, respectivamente. Por isso declara-se duas variaveis (counter e setCounter). A função (recebida por setCounter) serve para alterar o valor (recebida por counter)
````javascript
const [counter, setCounter] = useState[0];
````

#### (Closures)
> Saber sobre: https://nitsancohen770.medium.com/you-have-to-know-closures-to-be-a-good-react-developer-104fc2f6cd70




#### (Firebase)
> O firebase é uma plataforma BASS (Backend As A Service)
> Link para o site: https://firebase.google.com/

#### (Criar conta e novo projeto no Firebase)
> Para usar com a aplicação

#### (Ativar a autenticação com o Google do Firebase)
> Isso é feito pelo painel do projeto no site do Firebase

#### (Criar novo banco de dados real time do Firebase)
> Isso é feito pelo painel do projeto no site do Firebase
>
> No cadastro, iniciar o banco no modo bloqueado

#### (Adicionar a aplicação ao projeto do Firebase)
> Isso é feito a partir da página inicial do painel do projeto no site do Firebase
>
> Escolher a opção WEB

#### (Importar Firebase)
```bash
yarn add firebase
```

#### (Criar arquivo "firebase.ts" na pasta "src/services")
> Adicionar o código de configuração para integrar o Firebase

#### (Código do arquivo "firebase.ts")
```javascript
import firebase from 'firebase/app';

// Importando os serviços utilizados
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
```

#### (Criar arquivo ".env.local")
> Arquivo usado para definir variáveis de ambiente (não é enviado para o github)

#### (Váriaveis da integração com o Firebase)
> Copiar os valores das variáveis nas "Configuração do SDK" da aplicação no Firebase
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""

#### (Importar arquivo "firebase.ts" em "index.tsx")
```javascript
import './services/firebase';
```

<br />
</details>



<details>
<summary>Aula 02</summary>
<br />

### Aula 02

#### (Criar pasta "src/pages")
> Para guardar as páginas da aplicação

#### (Criar pasta "src/assets/images")
> Para guardar as imagens da aplicação

#### (Criar pasta "src/styles")
> Para guardar os estilos (css ou scss) da aplicação

#### (Criar arquivo de estilos "global.sccs")
> Para colocar os estilos globais do site
>
> Importar no arquivo "src/index.tsx"

#### (importar Imagem)
```javascript
import logoImg from '../assets/images/logo.svg';
```
> Usar imagem importada:
```javascript
<img src={logoImg} alt="Logo do site" />
```

#### (Instalar a biblioteca SASS)
> Sass é um pré-processador de css
>
> (OBS: versão 6 ainda não é suportada pelo create react-app em 07/2021)
```bash
yarn add node-sass@^5.0.0
```

#### (Importar CSS)
```javascript
import '../styles/button.scss';
```

#### (Classes)
```javascript
<div className=""></div>
```

#### (Id's)
```javascript
<div id=""></div>
```

#### (Hooks)
> Funções que começam com 'use' e são usadas apenas dentro do escopo do componente. Eles permitem que você use o state e outros recursos do React sem escrever uma classe

#### (DICA: Quando da erro ao instalar biblioteca que não aceita TypeScript)
> Instalar um pacote de terceito que inclui a definição de tipos desse pacote, para usar com typescript
```bash
yarn add @types/nome-da-biblioteca -D
```

#### (Biblioteca React Router DOM)
> Biblioteca para fazer o roteamento de páginas
>
>Instalar o React Router DOM:
```bash
yarn add react-router-dom
```
> A biblioteca não suporta TypeScript então é necessário instalar também o pacote:
```bash
yarn add @types/react-router-dom -D
```

#### (Ex.: Adicionar Rotas)
> (OBS: o exact informa que é a rota exata)
```javascript
<Route path="/" exact component={Home} />
<Route path="/rooms/new" component={NewRoom} />
<Route path="/rooms/:id" component={Room} />
```

#### (Ex.: Arquivo App.tsx com sistema de Rotas implementado)
```javascript
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
```

#### (Navegar para uma página/rota)
> Usando o Hook useHistory (exemplo):
```javascript
history.push('/rooms/new');
```
> Usando Link (exemplo):
```javascript
<Link to="/">clique aqui</Link>
```

#### (Ex.: Chamar função em elemento Html)
> A função handleCreateRoom:
```javascript
<button onClick={handleCreateRoom} className="create-room"></button>
```

#### (Criar pasta "src/contexts")
> Para guardar os contextos da aplicação

#### (Criar pasta "src/hooks")
> Para guardar os hooks da aplicação

#### (Contextos)
> Forma de compartilhar informações entre componentes da aplicação, ex.: dados de um usuário logado/autenticado. O contexto pode ser acessado pelos elementos children do provider desse contexto
>
> No exemplo abaixo, os elementos Route tem acesso as propriedades user e signInWithGoogle do AuthContext.Provider
```javascript
<AuthContext.Provider value={{ user, signInWithGoogle }}>
  <Route path="/" exact component={Home} />
  <Route path="/rooms/new" exact component={NewRoom} />
</AuthContext.Provider>
```

#### (Ex.: Criar contexto)
```javascript
import { createContext } from "react";
// Contexto que recebe uma string
export const AuthContext = createContext('')
```

#### (Ex.: Usar contexto)
```javascript
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'

const value = useContext(AuthContext)
```

#### (Autenticação simples com Firebase)
```javascript
import { auth, firebase } from "../services/firebase";

const provider = new firebase.auth.GoogleAuthProvider();
// Abre o pop up de login com google
auth.signInWithPopup(provider);
```

#### (useEffect)
> Hook usado para disparo de efeitos colaterais (funcionalidades)
>
> Ex.: executar função sempre que algo acontecer

#### (Ex.: usar useEffect)
> O useEffect recebe dois paramentros, o primeiro é o que diz o que vai acontecer, que é uma função, e o segundo é o que diz quando vai acontecer, que é um array com a informação que será monitorada
>
> Se a função vai ser executada somente uma vez, usa-se apenas o array [] vazio no segundo parametro
```javascript
useEffect(() => {}, [])
```

#### (Autenticação final do app com Firebase)
> Arquivo "src/contexts/AuthContext.tsx": contexto de autenticação que encapsula todas as informações referentes a autenticação de usuário. Faz login com o google, salva os dados do usuário no estado, etc.
>
> No arquivo "src/App.tsx": é importado e usado o provider AuthContextProvider do arquivo "AuthContext.tsx". As rotas/páginas são pasadas como componentes children desse provider, assim, pode-se ter acesso as informações do contexto nos arquivos dessas rotas/páginas
>
> Arquivo "src/hooks/useAuth.ts": hook de autenticação que pega e retorna os dados do contexto no arquivo "AuthContext.tsx" e é importado nos arquivos das rotas/páginas para recuperar informações do contexto de autenticação


<br />
</details>



<details>
<summary>Aula 03</summary>
<br />

### Aula 03

#### (Previnir formulário de redirecionar)
> Se usa a função event.preventDefault() para previnir o comportamento padrão do navegador, de redirecionar para página ao submeter o formulário:
```javascript
import { FormEvent } from 'react'

async function handleCreateRoom(event: FormEvent) {
  event.preventDefault()
}
```

#### (Componente Switch do react)
> Impede de mais de uma rota serem acessadas ao mesmo tempo. Ex.:
```javascript
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/rooms/new" component={NewRoom} />
  <Route path="/rooms/:id" component={Room} />
</Switch>
```

#### (Regras/Rules para adicionar no banco de dados do app no Firebase)
```
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
	        ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
        	"likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
          }
        }
      }
    }
  }
}
```

#### (Ex.: Obtém parametros passado na rota)
```javascript
import { useParams } from 'react-router-dom'

type RoomParams = {
  id: string;
}

const params = useParams<RoomParams>();
```

#### (IF)
> No React utiliza-se o IF ternário. Ex's.:
```javascript
{ user ? (
  <span>Mostrar uma coisa</span>
) : (
  <span>Mostrar outra coisa</span>
) }
```
```javascript
{ user && <span>Mostrar uma coisa</span> }
```

#### (Object.entries())
> Transforma um bjeto em array


<br />
</details>



<details>
<summary>Aula 04</summary>
<br />

### Aula 04

#### (Key no React)
> Sempre que se faz uma listagem (Ex.: percorrer um array com map) é necessário definir uma propriedade key para cada objeto da lista. Ex.:
```javascript
{questions.map(question => {
  return (
    <Question
      key={question.id}
      content={question.content}
      author={question.author}
    />
  );
})}
```


<br />
</details>



<details>
<summary>Aula 05</summary>
<br />

### Aula 05 

#### (Pacote classnames)
> Serve para passar classes para um elemento de forma mais agradável
```bash
yarn add classnames
```

#### (Fragmento/Fragment no React)
> Elemento que não é mostrado na renderização da aplicação, serve pra envolver elementos em um return, por exemplo, quando não se pode retornar mais de um elemento isolado. A sintaxe é: <></>
```javascript
{!question.isAnswered && (
  <>
    <button />
    <button />
  </>
)}
```

#### ()

<br />
</details>

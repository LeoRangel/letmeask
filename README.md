# Letmeask: Leandro Rangel 

[![Repositório](https://img.shields.io/badge/LeoRangel-letmeask-blueviolet)](https://github.com/LeoRangel/letmeask/)
[![licence mit](https://img.shields.io/github/license/LeoRangel/letmeask)](https://github.com/LeoRangel/letmeask/blob/main/LICENSE)

> :speech_balloon: Projeto de App web de gerenciamento de perguntas utilizando React e a plataforma Firebase
>
> (Desenvolvido durante a Next Level Week Together da Rocketseat)


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

#### (Criar projeto React)
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

#### (Conceito SPA)
> Single Page Aplication

#### (JSX e TSX)
> Como são chamados os HTML usados dentro de Javascrip e Typescript, respectivamente

#### (Componentes)
> São pedaços de código separados escritos em forma de functions que retornam algum html

#### (Propriedades)
> São informações (string, número, array, etc) que pode-se passar para um componente (tal qual os atributos do html). No Typescript é necessário declarar as propriedades no arquivo do componente

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

#### (Ex.: Declarando um estado)
> o useState retorna um valor e uma função, respectivamente. Por isso declara-se duas variaveis (counter e setCounter). A função (recebida por setCounter) serve para alterar o valor (recebida por counter)
````javascript
const [counter, setCounter] = useState[0];
````

#### Closures
> Saber sobre: https://nitsancohen770.medium.com/you-have-to-know-closures-to-be-a-good-react-developer-104fc2f6cd70


<br />
</details>
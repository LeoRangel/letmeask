// OBS: Primeiro arquivo que é executado pelo React

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importando Firebase
import './services/firebase';

// Importando estilos globais
import './styles/global.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
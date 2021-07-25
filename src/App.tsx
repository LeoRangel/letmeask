// Biblioteca de roteamento de páginas
import { BrowserRouter, Route } from 'react-router-dom'

// Importando páginas
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>

        {/* Rotas para as páginas - são propriedade children de AuthContextProvider*/}
        {/* As rotas recebem os dados do usuário logado do contexto AuthContextProvider, pois são "filhas" dele*/}
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />

      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
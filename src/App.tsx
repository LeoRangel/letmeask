// Biblioteca de roteamento de páginas
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importando páginas
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* Impede de mais de uma rota serem acessadas ao mesmo tempo */}
        <Switch>

          {/* Rotas para as páginas - são propriedade children de AuthContextProvider*/}
          {/* As rotas recebem os dados do usuário logado do contexto AuthContextProvider, pois são "filhas" dele*/}
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />

        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
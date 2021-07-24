// Biblioteca de roteamento de páginas
import { BrowserRouter, Route } from 'react-router-dom'

// Importando páginas
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';

// import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />

    </BrowserRouter>
  );
}

export default App;
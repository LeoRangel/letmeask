// Cria links para as rotas das páginas
// import { Link } from 'react-router-dom'

// Importando imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

// Importando componentes
import { Button } from '../components/Button';

// Importando hooks
// import { useAuth } from '../hooks/useAuth';

// Importando estilos
import '../styles/auth.scss';

export function NewRoom() {
  // const { user } = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            {/* Quer entrar em uma sala existente? <Link to="/">clique aqui</Link> */}
            Quer entrar em uma sala existente?
          </p>
        </div>
      </main>
    </div>
  )
}
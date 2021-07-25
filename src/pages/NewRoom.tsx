import { FormEvent, useState } from 'react';
// Cria links para as rotas das páginas
import { Link, useHistory } from 'react-router-dom'

// Importando imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

// Importando componentes
import { Button } from '../components/Button';

import { database } from '../services/firebase';

// Importando hooks
import { useAuth } from '../hooks/useAuth';

// Importando estilos
import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    // Previne de o formulário de redirecionar a página ao submeter o form
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    // Referência a categoria/seção em que será salvo o dado no BD
    const roomRef = database.ref('rooms');

    // Cria a nova sala no banco realtime do Firebase
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

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
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
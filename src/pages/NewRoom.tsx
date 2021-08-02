import { FormEvent, useState } from 'react';
// Cria links para as rotas das páginas
import { Link, useHistory } from 'react-router-dom'

// Importando imagens
import logoImg from '../assets/images/logo.svg';
import logoWhiteImg from '../assets/images/logo-white.svg';

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

  // Função de criar nova sala
  async function handleCreateRoom(event: FormEvent) {
    // Previne de o formulário de redirecionar a página ao submeter o form
    event.preventDefault();

    // Se valor do imput é vazio não faz nada
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
        <img src={logoWhiteImg} alt="Letmeask" />
        <h1>
          <strong>Every question has an answer.</strong>
        </h1>
        <p>Learn and share knowledge with others.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Create a new room</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p>
            Want to join an existing room?
            <br />
            <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'

// Importando imagens
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

// Importando componentes
import { Button } from '../components/Button';

import { database } from '../services/firebase';

// Importando hooks
import { useAuth } from '../hooks/useAuth';

// Importando estilos
import '../styles/auth.scss';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('');

    // Leva usuário para a tela de "new room", se este estiver autenticado
    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new');
    }

    // Função de entrar em uma sala
    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        // Se valor do imput é vazio não faz nada
        if (roomCode.trim() === '') {
            return;
        }

        // Pega os dados da sala informada no servidor
        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        // verifica se a sala existe
        if (!roomRef.exists()) {
            alert('Sala não existe.');
            return;
        }

        // Verifica se a sala está encerrada
        if (roomRef.val().endedAt) {
            alert('Sala encerrada.');
            return;
        }

        history.push(`/rooms/${roomCode}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room-button">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Fazer login com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'

// Importando imagens
import logoImg from '../assets/images/logo.svg';
import logoWhiteImg from '../assets/images/logo-white.svg';
import logoMescledImg from '../assets/images/logo-mescled.svg';
import googleIconImg from '../assets/images/icon/google-icon.svg';

// Importando componentes
import { Button } from '../components/Button';

import { database } from '../services/firebase';

// Importando hooks
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

// Importando estilos
import '../styles/auth.scss';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('');
    const { theme } = useTheme();

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
                <img src={logoWhiteImg} alt="Letmeask" />
                <h1>
                    <strong>Every question has an answer.</strong>
                </h1>
                <p>Learn and share knowledge with others.</p>
            </aside>
            <main>
                <div className="main-content">
                    {(theme === 'light') ? (
                        <img src={logoImg} alt="Letmeask" />
                    ) : (
                        <img src={logoMescledImg} alt="Letmeask" />
                    )}

                    {(user) ? (
                        <>
                            <h2>
                                Welcome, {user.name}!
                            </h2>
                            <button onClick={handleCreateRoom} className="create-room-button">
                                Create a new room
                            </button>
                        </>
                    ) : (
                        <button onClick={handleCreateRoom} className="create-room-button">
                            <img src={googleIconImg} alt="Logo do Google" />
                            Login with Google
                        </button>
                    )}

                    <div className="separator">or enter a room</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Enter room code"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Enter the room
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
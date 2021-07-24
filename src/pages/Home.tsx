// import { useHistory } from 'react-router-dom'

// Importando imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

// Importando componentes
import { Button } from '../components/Button';

// Importando hooks
// import { useAuth } from '../hooks/useAuth';

// Importando estilos
import '../styles/auth.scss';

export function Home() {
    // const history = useHistory();
    // const { user, signInWithGoogle } = useAuth()

    // // Leva usuário para a tela de "new room", se este estiver autenticado
    // async function handleCreateRoom() {
    //     if (!user) {
    //         await signInWithGoogle()
    //     }

    //     history.push('/rooms/new');
    // }

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
                    {/* <button onClick={handleCreateRoom} className="create-room"> */}
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
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
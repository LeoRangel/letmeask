import { FormEvent, useEffect, useState } from 'react';
// Obtém parametros passado na rota
import { useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/room.scss';

// Definindo a tipagem dos dados de questões retornados pela api do Firebase
type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>
// Tipagem do estado de questões
type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}
type RoomParams = {
  id: string;
}

export function Room() {
  const { user } = useAuth();
  // Obtém parametro de ID da sala passado na rota
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('');

  const roomId = params.id;

  // Monitora valor de roomId que quando é alterado (= a mudar de sala) executa as instruções novamente
  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      // Pegando os valores de room via api do Firebase
      const databaseRoom = room.val();
      // Salvando os valores das questões retornado como objeto pela api do Firebase
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      // Transformando as questões do formato objeto para array com Object.entries() e retornando todos os valores para a variável
      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }
      })

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    })
  }, [roomId]);

  // Função que salva questão no BD
  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    // Se imput da questão está vazio não faz nada
    if (newQuestion.trim() === '') {
      return;
    }

    // Retorna erro se usuário não estiver logado
    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false
    };

    // Salvando a questão no BD via api do Firebase
    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }


  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            )}
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </form>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>

      </main>
    </div>
  );
}
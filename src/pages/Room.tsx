import { FormEvent, useState } from 'react';
// Obtém parametros passado na rota
import { Link, useParams } from 'react-router-dom'

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomHeader } from '../components/RoomHeader';

// Importando imagens
import emptyQuestionsImg from '../assets/images/empty-questions.svg';

import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { useTheme } from '../hooks/useTheme';
import { database } from '../services/firebase';


import '../styles/room.scss';


type RoomParams = {
  id: string;
}

export function Room() {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  // Obtém parametro de ID da sala passado na rota
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const roomId = params.id;

  // Pegando o titulo e as questões da sala por meio do hook useRoom
  const { title, questions } = useRoom(roomId)

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

  // Função que faz o usuário dar like ou deslike em uma questão
  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      // Se já deu like, remove o like
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      })
    }
  }

  return (
    <div id="page-room" className={`theme-${theme}`}>

      <RoomHeader user={user} roomId={roomId} signOut={signOut} theme={theme} toggleTheme={toggleTheme} />

      <main className="my-container-md">
        <div className="room-title">
          <h1 className="h2">
            Room: {title}
          </h1>
          {questions.length > 0 && <span className="badge-questions-number">{questions.length} question(s)</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="What do you want to ask?"
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
              <span>To submit a question, please <Link to="/">login</Link>.</span>
            )}
            <Button type="submit" disabled={!user}>Send question</Button>
          </div>
        </form>

        <br />

        <div className="question-list">
          {(questions.length > 0) ? (
            questions.map(question => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {(question.isAnswered) ? (
                    <span className="badge-answered">Answered</span>
                  ) : (
                    (question.isHighlighted) ? (
                      <span className="badge-highlighted">Responding</span>
                    ) : (
                      <button
                        className={`like-button ${question.likeId ? 'liked' : ''}`}
                        type="button"
                        aria-label="Marcar como gostei"
                        onClick={() => handleLikeQuestion(question.id, question.likeId)}
                      >
                        {question.likeCount > 0 && <span>{question.likeCount}</span>}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#adb5bd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )
                  )}
                </Question>
              );
            })
          ) : (
            <div className="no-questions">
              <img src={emptyQuestionsImg} alt="Letmeask" />
              <span>No questions yet</span>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
import { useHistory, useParams } from 'react-router-dom'

import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import removeCheckImg from '../assets/images/remove-check.svg';
import answerImg from '../assets/images/answer.svg';

import { Question } from '../components/Question';
import { RoomHeader } from '../components/RoomHeader';

// Importando imagens
import emptyQuestionsImg from '../assets/images/empty-questions.svg';

import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const { user, signOut } = useAuth();
  const history = useHistory()
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId)

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string, isAnswered: boolean) {
    if (isAnswered) {
      // Se está marcado com respondido, remove a marcação
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: false,
      })
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true,
      })
    }
  }

  async function handleHighlightQuestion(questionId: string, isHighlighted: boolean) {
    if (isHighlighted) {
      // Se já está destacado, remove o destaque
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: false,
      })
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: true,
      })
    }
  }

  return (
    <div id="page-room">

      <RoomHeader user={user} roomId={roomId} signOut={signOut} handleEndRoom={handleEndRoom} />

      <main className="my-container-md">
        <div className="room-title">
          <h1 className="h2">
            Room: {title}
          </h1>
          {questions.length > 0 && <span className="badge-questions-number">{questions.length} pergunta(s)</span>}
        </div>

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

                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id, question.isAnswered)}
                  >
                    <img src={(question.isAnswered) ? (removeCheckImg) : (checkImg)} alt="Marcar pergunta como respondida" />
                  </button>

                  {(!question.isAnswered) && (
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              );
            })
          ) : (
            <div className="no-questions">
              <img src={emptyQuestionsImg} alt="Letmeask" />
              <span>Nenhuma questão ainda</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
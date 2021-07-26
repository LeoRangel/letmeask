import { useEffect, useState } from "react";

import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

// Definindo a tipagem dos dados de questões retornados pela api do Firebase
type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>
// Tipagem do estado de questões
type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTitle] = useState('');


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
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
        }
      })

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    })

    return () => {
      roomRef.off('value');
    }

  }, [roomId, user?.id]);


  return { questions, title }
}
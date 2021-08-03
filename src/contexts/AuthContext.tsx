import { createContext, ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, firebase } from "../services/firebase";

// Tipagens - definindo os tipos de dado dos componentes
type User = {
  id: string;
  name: string;
  avatar: string;
}
type AuthContextType = {
  user: User | undefined;
  // Função asincrona retorna Promise
  // Função que não tem retorno <void>
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}
type AuthContextProviderProps = {
  children: ReactNode;
}

// Criando um contexto para autenticação e definindo os tipos de dados em AuthContextType
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const history = useHistory();

  // O useEffect irá executar a função somente uma vez ao iniciar o app
  // Recupera o estado do usuário no app se ele sai ou desloga (pois o estado só fica salvo enquanto ele está no app)
  useEffect(() => {

    // onAuthStateChanged é um envent listening que monitora e detecta se o usuário já tinha feito login anteriormente
    const unsubscribe = auth.onAuthStateChanged(user => {

      // Verifica se o usuário tem informações
      // Erro se o usuário não tiver nome ou foto
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        // Salvando dados do usuário no estado
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    // Sempre que há um event listening precisa retornar uma função que descadastra-se dele no fim do useEffect
    return () => {
      unsubscribe();
    }
  }, [])

  // Função de login com o Google via Firebase
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      // Erro se o usuário não tiver nome ou foto
      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      // Salvando dados do usuário no estado
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  async function signOut() {
    await auth.signOut();
    setUser(undefined);
    history.push('/');
  }

  return (

    // As propriedades com os dados do usuário e a função de login com Google poderão ser acessadas pelos componentes "filhos" deste
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {/* Vai pegar os componentes inserido como children, ou seja, as rotas (no arquivo App.tsx) */}
      {props.children}
    </AuthContext.Provider>

  );
}
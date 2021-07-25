import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'

// Retorna o contexto criado para autenticações
export function useAuth() {
  const value = useContext(AuthContext)

  return value;
}
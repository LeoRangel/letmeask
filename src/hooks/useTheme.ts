import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

// Retorna o contexto criado para temas
export function useTheme() {
  const value = useContext(ThemeContext)

  return value;
}
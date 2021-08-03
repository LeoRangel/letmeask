import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
    children: ReactNode;
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
        // Pegando valor tema armazenado no localStorage e definindo como valor padrão
        const storageTheme = localStorage.getItem('theme');

        return (storageTheme ?? 'light') as Theme;
    });

    // Salvando tema escolhido no localStorage
    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    function toggleTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
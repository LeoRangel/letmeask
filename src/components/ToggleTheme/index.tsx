import { ButtonHTMLAttributes } from 'react'

import lightModeIcon from '../../assets/images/icon/light-mode.svg';
import darkModeIcon from '../../assets/images/icon/dark-mode.svg';

import './styles.scss';

// Definindo os tipos de propriedades que o botão recebe, que nesse caso é o ButtonHTMLAttributes (= a todos os atributos de um botão html) e o isOutlined
type ToggleThemeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    theme: string;
};

export function ToggleTheme({ theme, ...props }: ToggleThemeProps) {
    return (
        <button
            className="toggleTheme"
            {...props}
        >
            <span>
                {(theme === "light") ? (
                    <img src={lightModeIcon} alt="Light mode" />
                ) : (
                    <img src={darkModeIcon} alt="Dark mode" />
                )}
            </span>
        </button>
    )
}
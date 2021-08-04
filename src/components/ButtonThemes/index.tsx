import { ButtonHTMLAttributes } from 'react'

import lightModeIcon from '../../assets/images/light-mode.svg';
import darkModeIcon from '../../assets/images/dark-mode.svg';

import './styles.scss';

// Definindo os tipos de propriedades que o botão recebe, que nesse caso é o ButtonHTMLAttributes (= a todos os atributos de um botão html) e o isOutlined
type ButtonThemesProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    theme: string;
};

export function ButtonThemes({ theme, ...props }: ButtonThemesProps) {
    return (
        <button
            className="buttonThemes"
            {...props}
        >
            <span>Theme: </span>
            {(theme === "light") ? (
                < img src={lightModeIcon} alt="Light mode" />
            ) : (
                <img src={darkModeIcon} alt="Dark mode" />
            )}
        </button>
    )
}
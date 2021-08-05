import { ButtonHTMLAttributes } from 'react'

import './styles.scss';

// Definindo os tipos de propriedades que o botão recebe, que nesse caso é o ButtonHTMLAttributes (= a todos os atributos de um botão html) e o isOutlined
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean,
    isSmall?: boolean
};

export function Button({ isOutlined = false, isSmall = false, ...props }: ButtonProps) {
    return (
        <button
            className={`button ${isOutlined ? 'outlined' : ''} ${isSmall ? 'small' : ''}`}
            {...props}
        />
    )
}
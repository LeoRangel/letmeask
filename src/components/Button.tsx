import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss';

// Definindo o tipo de propriedade que o botão recebe, que nesse caso é o ButtonHTMLAttributes (= a todos os atributos de um botão html)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}
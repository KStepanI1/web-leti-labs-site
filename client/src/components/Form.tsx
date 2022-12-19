
import React from 'react'

type ReactForm = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

export interface IForm extends ReactForm {

}

const Form = ({ children, className, ...props }: IForm) => {

    const generateClassName = () => {
        let customClassName = `form${className ? ` ${className}` : ''}`
        const modifers: any[] = []

        modifers.forEach(mod => {
            if (mod) customClassName += ` -${mod}`
        })

        return customClassName
    }

    return (
        <form className={generateClassName()} {...props}>
            {children}
        </form>
    )
}

export default Form
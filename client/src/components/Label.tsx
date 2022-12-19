import React from 'react'

type ReactLabel = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

interface Props extends ReactLabel {
    required?: boolean
}

const Label = ({ children, className, required, ...props }: Props) => {
    if (!children) return null

    return (
        <label className={`label${className ? ` ${className}` : ''}`} {...props}>
            {children}
            {required && <span className="label__required-dot">*</span>}
        </label>
    )
}

export default Label

import React from 'react'
import { Input, InputProps } from '.'

interface NumberInputProps extends InputProps {
    type?: 'number'
}

const NumberInput = ({ value, onChange }: NumberInputProps) => {
    return (
        <Input type='number' value={value} onChange={onChange} />
    )
}

export default NumberInput
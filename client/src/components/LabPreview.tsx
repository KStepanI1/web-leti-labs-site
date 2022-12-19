
import React from 'react'
import { Button, ButtonProps } from './Button'

interface ILabPreview extends ButtonProps {
    name: string
}

const LabPreview = React.forwardRef<HTMLButtonElement, ILabPreview>(({ name, ...props }, ref) => {
    return (
        <Button  {...props} ref={ref} className='lab-preview'>
            {name}
        </Button>
    )
})

export default LabPreview
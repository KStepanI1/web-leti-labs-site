import React, { useState } from 'react'
import { Input, InputProps } from '.'
import Label from '../Label'

interface IFileInput extends InputProps { }

const FileInput = ({ ref, label, onChange, multiple, ...props }: IFileInput) => {
    const [selected, setSelected] = useState<FileList | null>(null)
    const placeholder = multiple ? 'Файлы не выбраны' : 'Файл не выбран'
    const slectedFiles = selected && Array.from(selected).map(file => file.name).join(', ')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.files)

        if (onChange) onChange(e)
    }

    return (
        <div className='file-input__container'>
            <Label className='file-input'>
                <Input type='file' multiple={multiple} onChange={handleChange} {...props} />
                {label}
            </Label>
            <div className='file-input__selected'>
                {slectedFiles || placeholder}
            </div>
        </div>

    )
}

export default FileInput
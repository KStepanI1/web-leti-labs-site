
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadFiles } from '../api/file'
import { createLab } from '../api/lab'
import { Button } from '../components/Button'
import Form from '../components/Form'
import { Input } from '../components/Input'

import FileInput from '../components/Input/FileInput'
import { Subtitle } from '../components/Subtitle'
import { APP_ROUTES_CONFIG } from '../utils/constants'

type Props = {}

const NewLab = (props: Props) => {
    const [name, setName] = useState('')
    const [html, setHtml] = useState<File | null>(null)
    const [css, setCss] = useState<File | null>(null)
    const [otherFiles, setOtherFiles] = useState<File[] | null>(null)
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const buttonDisabled = !(name && html && css)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, callback: React.Dispatch<React.SetStateAction<any>>) => {
        if (!e.target.files) return

        const filelist = Array.from(e.target.files)
        const filesAmount = filelist.length

        if (filesAmount === 1) {
            callback(filelist[0])
        } else {
            callback(filelist)
        }
    }

    console.log(otherFiles)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!html || !css) return false

        setIsPending(true)

        const files = [html, css, ...(otherFiles || [])]

        uploadFiles({
            files, onSuccess: (data) => {
                const ids = data.ids
                const lab = { name, htmlId: ids.at(0), cssId: ids.at(1), other: ids.slice(2) }

                createLab({
                    lab,
                    onSuccess: () => {
                        setIsPending(false)
                        navigate(APP_ROUTES_CONFIG.home.path)
                    }
                })
            }
        })
    }


    return (
        <div className='new-lab'>
            <Subtitle text='Добавление новой лаболаторной работы' />
            <Form onSubmit={handleSubmit}>
                <Input value={name} label='Название' onChange={(e) => setName(e.target.value)} />
                <FileInput accept='.html' label='HTML файл' onChange={e => handleFileChange(e, setHtml)} />
                <FileInput accept='.css,.scss' label='CSS файл' onChange={e => handleFileChange(e, setCss)} />
                <FileInput multiple label='Другие файлы' onChange={e => handleFileChange(e, setOtherFiles)} />
                <Button type='submit' className='new-lab__submit' disabled={buttonDisabled} isPending={isPending}>
                    Создать
                </Button>
            </Form>
        </div>
    )
}

export default NewLab
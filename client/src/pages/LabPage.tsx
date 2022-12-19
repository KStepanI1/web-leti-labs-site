

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFile } from '../api/file'
import { getLab } from '../api/lab'
import { Lab, LabSections } from '../components/Lab'
import { ResultProps } from '../components/Result'
import { BASE_URL } from '../utils/constants'

type Props = {}

type LabType = any

const LabPage = (props: Props) => {
    const { id } = useParams()
    const [lab, setLab] = useState<LabType | null>(null)
    const [resultPath, setResultPath] = useState<string>('')

    useEffect(() => {
        if (id) getLab({
            id: +id, onSuccess: (lab) => {
                setLab(lab)

                getFile({ id: lab.html_file, onSuccess: (data) => setResultPath(BASE_URL + data.path) })
            }
        })
    }, [id])

    const LabSections: LabSections[] = [
        {
            title: "Код HTML файла",
            filePath: lab?.html_file,
            language: "html",
        },
        {
            title: "Код CSS файла",
            filePath: lab?.css_file,
            language: "css",
        },
    ];

    const LabResult: ResultProps = {
        title: "Результат",
        path: resultPath,
    };

    return (
        <Lab sections={LabSections} result={LabResult} />
    )
}

export default LabPage
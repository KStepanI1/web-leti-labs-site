import { instance } from '.';
import { AxiosResponse } from "axios"
import { Toast } from '../components/Toast'

const createLab = async ({ lab, onSuccess }: { lab: { name: string, htmlId: number, cssId: number, other: number[] }, onSuccess: (res: AxiosResponse) => void }) => {
    const successMessage = 'Лабораторная работа успешно создана'
    const errorMessage = 'Ошибка создания лаболаторной работы'

    console.log(lab.other)

    try {
        const resPromise = instance.post(`/api/create-lab/?name=${lab.name}&html=${lab.htmlId}&css=${lab.cssId}${lab.other?.map(id => `&o=${id}`).join('') || ''}`)
        const res = await resPromise

        if (onSuccess) onSuccess(res.data)
        Toast({ type: 'success', message: successMessage })

        return res
    } catch (err) {
        
        Toast({ type: 'error', message: errorMessage })
        throw new Error(errorMessage)
    }
}

const getLab = async ({ id, onSuccess }: { id: number, onSuccess: (data: any) => void }) => {
    try {
        const res = await instance.get(`/api/labs/${id}/`)

        if (onSuccess) onSuccess(res.data)
        return res
    } catch (err) {
        const errorMessage = 'Ошибка попытки запроса лаболаторной работы'
        Toast({ message: errorMessage, type: 'error'})
        throw new Error(errorMessage)
    }
}

const getLabs = async ({ onSuccess }: { onSuccess: (data: any) => void }) => {
    try {
        const res = await instance.get(`/api/labs/`)

        if (onSuccess) onSuccess(res.data)
        return res
    } catch (err) {
        const errorMessage = 'Ошибка попытки запроса лабораторных работ'
        Toast({ message: errorMessage, type: 'error'})
        throw new Error(errorMessage)
    }
}

export { createLab, getLab, getLabs }
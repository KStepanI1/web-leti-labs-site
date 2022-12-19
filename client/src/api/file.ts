import { AxiosResponse } from 'axios';
import { instance } from ".";


const getFile = async ({ id, onSuccess }: { id: number, onSuccess: (data: any) => void }) => {
    try {
        if (!id) return

        const result = await instance.get(`/api/files/${id}/`)
        onSuccess(await result.data)
    } catch(err) {
        throw new Error('Ошибка получения файла')
    }
}

const uploadFile = async ({ file, onSuccess }: { file: File, onSuccess: (res: AxiosResponse) => void }) => {
    try {
        const formData = new FormData()
        formData.append('file', file)

        return await instance.post("api/upload-files/", formData).then((res) => console.log(res.data));
    } catch (err) {
        throw new Error('Ошибка отправки файла')
    }
}

const uploadFiles = async ({ files, onSuccess }: { files: File[], onSuccess: (res : any) => void }) => {
    try {
        const formData = new FormData()

        for (const f of files) {
            formData.append('file', f)
        }

        const res = await instance.post("api/upload-files/", formData)

        if (onSuccess) onSuccess(res.data)
        return res;
    } catch (err) {
        throw new Error('Ошибка отправки файла')
    }
}

export { getFile, uploadFiles, uploadFile }
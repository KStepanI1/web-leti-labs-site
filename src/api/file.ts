import {BASE_URL} from "../utils/constants";


const getFile = async ({ path, onSuccess }: { path: string, onSuccess: (text: string) => void }) => {
    try {
        const result = await fetch(`${BASE_URL}${path}`)
        onSuccess(await result.text())
    } catch(err) {
        throw Error
    }
}

export { getFile }
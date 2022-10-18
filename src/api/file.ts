

const getFile = async ({ path, onSuccess }: { path: string, onSuccess: (text: string) => void }) => {
    try {
        const result = await fetch(path)
        onSuccess(await result.text())
    } catch(err) {
        throw Error
    }
}

export { getFile }
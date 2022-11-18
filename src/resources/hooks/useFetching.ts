import { useState } from "react"

export const useFetching = (callback: Function) => {
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            await callback()
        } catch(e: any) {
            setError(e.message)
        }
    }

    return {
        fetchInfo: fetching,
        fetchError: error,
    }
}
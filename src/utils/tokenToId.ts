import { jwtDecode } from 'jwt-decode'

const tokenToId = (): string | null => {
    const token = localStorage.getItem('token')

    if(token) {
        try {
            const decoded: any = jwtDecode(token)
            return decoded.sub
        } catch (e) {
            console.error(e)
        }
    }

    return null
}

export default tokenToId
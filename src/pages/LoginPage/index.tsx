import React, { useState } from 'react'
import './loginStyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault()
        setLoading(true)

        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password,
            });
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard')
        } catch (e: any) {
            alert(e.response?.data?.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="geral bg-blue-200">
            <div className="container w-3/5 h-full">
                <div className="loginTitle">
                    <h1 className="font-sans text-6xl antialiased font-bold text-blue-600">Login</h1>
                </div>
                <div className="w-full place-content-center">
                    <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
                        <div className="mb-4 flex flex-col">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                        <button disabled={loading} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {loading ? 'Logando...' : 'Login'}
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/register">
                            Ainda não possui uma conta?
                        </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
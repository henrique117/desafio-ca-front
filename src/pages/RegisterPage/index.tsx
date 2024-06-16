import './registerStyle.css'

export default function Register() {
    return (
        <div className="geral bg-blue-200">
            <div className="w-3/5 container h-full">
                <div className="registerTitle">
                    <h1 className="font-sans text-6xl antialiased font-bold text-blue-600">Register</h1>
                </div>
                <div className="w-full">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
                        <div className="mb-4 flex flex-col">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                            Já possui uma conta?
                        </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}